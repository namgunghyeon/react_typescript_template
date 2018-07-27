import puppeteer from 'puppeteer';

const findNetworks = async (url, filterKey, waitFor) => {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    devtools: false
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  const newUrls = [];

  page.on('request', request => {
    const url = request.url();
    const newUrl = decodeURI(url).
      replace(/%2C/gi, ",").
      replace(/%26/gi, "&").
      replace(/%2F/gi, "/").
      replace(/%3A/gi, ":").
      replace(/%3F/gi, "?").
      replace(/%3D/gi, "=");

    if (filterKey) {
      if (url.indexOf(filterKey) >= 0) {
        newUrls.push(newUrl);
      }
    } else {
      newUrls.push(newUrl);
    }

    request.continue();
  });

  page.goto(url, { timeout: 100000 });
  await page.waitFor(waitFor);
  await browser.close();

  return newUrls;
}

export {
  findNetworks,
}