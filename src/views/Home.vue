<template>
<div class="full">
  <div :style="{backgroundImage: 'url(/src/assets/sidebarimg.jpeg)'}"  class="d-flex flex-column p-3 text-white bg-dark" id="sidenav" style="height: 100vh;  position: -webkit-sticky;position: sticky;top: 0;"> 
      
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;" fill="currentColor">
        <symbol id="bootstrap" viewBox="0 0 16 16">
             <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
        </symbol>
        <symbol id="main" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
        </symbol>
        <symbol id="home" viewBox="0 0 16 16">
            <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </symbol>
        <symbol id="amen" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                 <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>      
        </symbol>
        <symbol id="table" viewBox="0 0 16 16">
            <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
        </symbol>
        <symbol id="res" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
        </symbol>
        <symbol id="grid" viewBox="0 0 16 16">
                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
        </symbol>
        </svg>
        
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap" /></svg>
            <span class="fs-4" id="b5">TASIPA</span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
                <a href="/home" class="nav-link active">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#main" /></svg>
                      <span id="b1">Home</span>
                </a>
            </li>
            <li>
                <a href="/restaurant" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#res" /></svg>
                      <span id="b1">Restaurants</span>
                </a>
            </li>
            <li>
                <a href="/event" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#table" /></svg>
                    <span id="b2">Events</span>
                </a>
            </li>
            <li>
                <a href="/place" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#grid" /></svg>
                    <span id="b3">Attractions</span>
                </a>
            </li>
            <li>
                <a href="/amenity" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                        <use xlink:href="#amen" /></svg>
                    <span id="b4">Amenities</span>
                </a>
            </li>
        </ul>
       
        <hr>
        <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://i.ibb.co/MMbnCSL/s.jpg" alt="jerry" width="32" height="32" class="rounded-circle me-2">
                <strong id="b6">{{uname}}</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">              
                <li><a class="dropdown-item" @click="logout">Sign out</a></li>   
            </ul>
        </div>      
    </div>
<div>
<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.ytimg.com/vi/QnAz_aeEUIk/maxresdefault.jpg" class="d-block w-100" style="height: 550px" alt="pic1" />
          <div class="container">
            <div class="carousel-caption text-center">
              <h1 class="textbold">TASIPA</h1>
              <p>THINGS HAPPENED ALL AROUND</p>
            </div>
          </div>
        </div>
    </div>
</div>
  
<br><br>
<h5 class="topword">Top Restaurants</h5>
<table class="table table-stripped table-borderes">
                <tbody class="whitening">
                    <div class="album py-5 bg-light">
                      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <tr v-for="item in rest" v-bind:key="item.id">
                      <div class="col">
                        <div class="card shadow-sm" style="max-width: 325px">   
                           <a><img v-bind:src="item.imageUrl" alt="NO Image" class="card-img-top" style="width: 100%; max-width: 400px; height:200px;"></a>
                           <div class="card-body">
                             <h5 class="card-title">{{item.restname}}</h5>
                             <p class="card-text">{{item.restcat}}</p>
                            <router-link :to="`/restaurantdetail/${item.id}`">
                            <button class="btn info">Detail</button>
                            </router-link>
                            </div>
                        </div>
                      </div>
                    
                    </tr>
                    </div>
                    </div>
                </tbody>
            </table>

<br><br>
<h5 class="topword">Top Attractions</h5>
<table class="table table-stripped table-borderes">
                <tbody>
                    <div class="album py-5 bg-light">
                      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <tr v-for="item in places" v-bind:key="item.id">
                      <div class="col">
                        <div class="card shadow-sm" style="max-width: 325px">   
                           <a><img v-bind:src="item.attimageUrl" alt="NO Image" class="card-img-top" style="width: 100%; max-width: 400px; height:200px;"></a>
                           <div class="card-body">
                             <h5 class="card-title">{{item.attname}}</h5>
                             <p class="card-text">{{item.attcat}}</p>
                            <router-link :to="`/attractiondetail/${item.id}`">
                            <button class="btn info">Detail</button>
                            </router-link>
                            </div>
                        </div>
                      </div>       
                    </tr>
                    </div>
                    </div>
                </tbody>
            </table>

<br><br>
<h5 class="topword">Upcoming Events</h5>
<table class="table table-stripped table-borderes">
                <tbody>
                    <div class="album py-5 bg-light">
                      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <tr v-for="item in events" v-bind:key="item.id">
                      <div class="col">
                        <div class="card shadow-sm" style="max-width: 325px">   
                           <a><img v-bind:src="item.eveimageUrl" alt="NO Image" class="card-img-top" style="width: 100%; max-width: 400px; height:200px;"></a>
                           <div class="card-body">
                             <h5 class="card-title">{{item.evename}}</h5>
                             <p class="card-text">{{item.evecat}}</p>
                            <router-link :to="`/eventdetail/${item.id}`">
                            <button class="btn info">Detail</button>
                            </router-link>
                            </div>
                        </div>
                      </div>
                    
                    </tr>
                    </div>
                    </div>
                </tbody>
            </table>
</div>
</div>
    
</template>

<script>
import firebase from 'firebase'
import {db} from '../firebase'
export default {
  name: 'Restaurant',
  props: {
    
  },
  data() {
    return {
         rest:[],
         events:[],
         places:[],
         Weathers:{},
         uname:''     
    }
  },
  created () {
    db.collection("restaurant").limit(3).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.rest.push({ id:doc.id,...doc.data()})
        console.log(this.rest)
        });
    });
    db.collection("attractions").limit(3).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.places.push({ id:doc.id,...doc.data()})
        console.log(this.place)
        });
    });
    db.collection("events").limit(3).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.events.push({ id:doc.id,...doc.data()})
        console.log(this.events)
        });
    });
  },
   mounted() {
     this.uname=firebase.auth().currentUser.email
   },
    methods: {
      logout() {
        firebase.auth().signOut()
          .then(()=> {
            this.$router.replace('/signin')
          })
          .catch( error => {
              console.log(error.message)
          })
          
      }
    }
}
</script>

<style scoped>
@import '/css/home.css';
.textbold{
    font-weight: bold;
}
.topword{
    text-align: center;
    color: green;
}
.album{
    background-color: white;
}
.colorweather{
    color: red;
}

@media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
    .card-img-top{
      width: 300px;
      height: 300px;
    }
    .card-body{
      font-size:10px;
      text-align: center;
      height: 150px;
    }
</style>