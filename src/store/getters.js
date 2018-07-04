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
  numTxs: (state) => {
    let numTxs = NaN;

    if (state.data.blocks.getData()) {
      const data = state.data.blocks.getData();
      numTxs = data.block_meta.header.total_txs;
    }

    return numTxs;
  },
};

export default getters;
