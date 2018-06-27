<template>
  <panel
    is-full-page=true
    header='Dashboard' >

    <div slot="body">
      <div class="columns">
        <div class="column">
          <h1>I'm body</h1>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
import Panel from '../elements/Panel';

export default {
  components: {
    Panel,
  },
};
</script>
