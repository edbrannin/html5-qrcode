var app = new Vue({
  el: '#app',
  mounted: function() {
    const t = this;
    $('#reader').html5_qrcode(function(data){
      $('#read').html(data);
      console.log("Got value:", data);
      t.newValue(data);
    },
    function(error){
      t.readError = error;
    }, function(videoError){
      t.vidError = error;
    });
  },
  methods: {
    newValue: function(v) {
      console.log("Adding value:", v);
      console.log("This:", this);
      if (
        v != undefined
        && v != this.currentValue
        && ! this.values.includes(v)
      ) {
        this.values.push(v);
      }
    }
  },
  data: {
    currentValue: undefined,
    readError: undefined,
    vidError: undefined,
    values: []
  }
});
