import {
  findNetworks,
} from '../models/network'

const getNetworks = async (ctx) => {
  const {
    url,
    filter,
    waitFor,
  } = ctx.query;

  const urls = await findNetworks(url, filter, parseInt(waitFor, 10) || 5000);

  ctx.status = 200;
  ctx.body = {
    url,
    filter,
    networks: urls,
  };

}

export {
  getNetworks,
}