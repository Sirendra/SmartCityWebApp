<template>
<div class="container" style="overflow:hidden;">
    <div class="location_title" style="padding-top: 30px;">   
            <h1 class="loc_title" style="text-align: center;">{{restarray[0].restname}}</h1>
            <br>
        </div>

        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" style="padding-left:30px; padding-right:30px;" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img v-bind:src="restarray[0].imageUrl" class="d-block w-100" style="height: 400px" alt="picture1">
                    <div class="carousel-caption text-center">
                    </div>
                </div>
            </div>
        </div>
    
        <br>
        <div style="padding-left:30px; padding-right:30px; padding-top:10px;">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Location</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{restarray[0].restcat}}</td>
                        <td>{{restarray[0].restcontact}}</td>
                        <td>{{restarray[0].restloca}}</td>
                        <td>{{restarray[0].restrate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
         <a href="/restaurant" style="margin-left:30px;">Back to the restaurant page</a>

</div>
</template>

<script>
import {db} from '../firebase'
export default {
    name: 'RestDetail',
  props: {
    
  },
  data(){
      return{
      restarray:[],
      rest: this.$route.params.id
      }
  },
  created(){
    db.collection("restaurant").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if(doc.id==this.rest)
    {
        this.restarray.push(doc.data())
        console.log(this.restarray)
        
    }
    });
    });
  }
}
</script>
