Vue.component('details-modal', {
  props:{
    instrument: Object
  },
  template: '#details-modal-template'
});

Vue.component('create-modal', {
  props:{
    newInstrument:{
      type: Object,
      default: function(){
        return{
          name: "",
          type: "",
          price: 0,
          brand: "",
          image: "",
          inCart: false,
          details: false
        }
      }
    }
  },
  template: '#create-modal-template'
});

new Vue({
  el: "#app",
  data:{
    showCreateModal: false,
    myCart: [],
    instruments: [{
      name: "Telecaster",
      type: "Guitar",
      price: 700,
      brand: "Fender",
      image: "https://media.guitarcenter.com/is/image/MMGS7/Player-Telecaster-Maple-Fingerboard-Electric-Guitar-3-Color-Sunburst/L21565000001000-00-290x290.jpg",
      inCart: false,
      details: false
    }, 
  {
      name: "S60",
      type: "Guitar",
      price: 1200,
      brand: "Maton",
      image: "https://images.reverb.com/image/upload/s--1z6zgGYX--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1498681428/unmvcm4ev7rywa5bthgn.jpg",
      inCart: false,
      details: false
    },
    {
      name: "PSR-E273",
      type: "Portable Keyboard",
      price: 140,
      brand: "Yamaha",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTedcRz-HjPh1ZigYIgSSehdrqH72nCpHzZRxECRZ0mVWJo83Fy9pvlXvwOerds8wSH1tOwWKeOJRvRQITuRNi2RSWz0pqpF8ZXMrGzON0Fc95myFUBTPYj&usqp=CAE",
      inCart: false,
      details: false
    },
    {
      name: "PS-220E Parlor",
      type: "Guitar",
      price: 830,
      brand: "Fender",
      image: "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0970320337_fen_ins_frt_1_rr.jpg",
      inCart: false,
      details: false
    },
    {
      name: "EBW70C Australian Blackwood",
      type: "Guitar",
      price: 1999.99,
      brand: "Maton",
      image: "https://www.stringinstruments.com/images/product/medium/ae00-7125.jpg",
      inCart: false,
      details: false
    },
    {
      name: "YHR-671",
      type: "French Horn",
      price: 5554,
      brand: "Yamaha",
      image: "https://usa.yamaha.com/files/YHR-671_02_396x396_93213d6224f6f425e74f3f3aac96af96.jpg",
      inCart: false,
      details: false
    }              
   ],
  },
  methods:{
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.myCart.push(instrument);
    },
    emptyCart: function(){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
      })
      this.myCart = [];
    },
    createInstrument: function(newInstrument){
      var mishaps = [];
      if (newInstrument.name === ""){
        mishaps.push("Please enter a name");
      }
      if (newInstrument.type === ""){
        mishaps.push("Please enter a type");
      }
      if (newInstrument.price <= 0){
        mishaps.push("Instruments are not free, please enter a price greater than 0");
      }
      if (newInstrument.brand === ""){
        mishaps.push("Please enter a brand");
      }
      if (mishaps.length > 0){
        alert(mishaps);
      }else{
        this.instruments.push(newInstrument);
        this.showCreateModal = false;
      }
    }
  }
});
