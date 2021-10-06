<template>
<div class="container" style="overflow:hidden;">
    <div class="location_title" style="padding-top: 30px;">   
            <h1 class="loc_title" style="text-align: center;">{{evearray[0].evename}}</h1>
            <br>
        </div>

        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" style="padding-left:30px; padding-right:30px;" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img v-bind:src="evearray[0].eveimageUrl" class="d-block w-100" style="height: 400px" alt="picture1">
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
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{evearray[0].evedate}}</td>
                        <td>{{evearray[0].evecat}}</td>
                        <td>{{evearray[0].eveloca}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <a href="/event" style="margin-left:30px;">Back to the event page</a>

</div>
</template>

<script>
import {db} from '../firebase'
export default {
    name: 'EventDetail',
  props: {
    
  },
  data(){
      return{
      evearray:[],
      eve: this.$route.params.id
      }
  },
  created(){
    db.collection("events").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if(doc.id==this.eve)
    {
        this.evearray.push(doc.data())
        console.log(this.evearray)
        
    }
    });
    });
  }
}
</script>
