<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import utilsApi from "@/api/utils";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    utilsApi.test({ doc: 123, typedoc: "CC", fechaE: "01/12/2017" });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
