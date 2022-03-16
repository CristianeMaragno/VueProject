import Vue from 'vue';

export default {
  name: 'topbar',
  props: {
  },

  data () {
    return {
      test: null
    }
  },

  methods: {
    getValue(){
      var value = Vue.http.get("http://34.69.63.5:5000/content/page").then((resp) => {
        return resp;
      });

      value.then(resp => {
        this.test = resp.body.data;
      });
    }
  }
}