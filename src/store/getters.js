const getters = {
  latestBlock: (state) => {
    const latestBlock = {
      height: NaN,
      hash: NaN,
      time: NaN,
    };

    if (state.data.status.getData()) {
      const data = state.data.status.getData();

      latestBlock.height = data.sync_info.latest_block_height;
      latestBlock.hash = data.sync_info.latest_block_hash;
      latestBlock.time = data.sync_info.latest_block_time;
    }

    return latestBlock;
  },
};

export default getters;
