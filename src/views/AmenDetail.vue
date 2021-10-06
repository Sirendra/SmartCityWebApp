<template>
<div class="container" style="overflow:hidden;">
    <div class="location_title" style="padding-top: 30px;">   
            <h1 class="loc_title" style="text-align: center;">{{amenarray[0].amename}}</h1>
            <br>
        </div>

        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" style="padding-left:30px; padding-right:30px;" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img v-bind:src="amenarray[0].ameimageUrl" class="d-block w-100" style="height: 400px" alt="picture1">
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
                        <th scope="col">Contact</th>
                        <th scope="col">Category</th>
                        <th scope="col">Location</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{amenarray[0].amecontact}}</td>
                        <td>{{amenarray[0].amecat}}</td>
                        <td>{{amenarray[0].ameloca}}</td>
                        <td>{{amenarray[0].amerate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <a href="/amenity" style="margin-left:30px;">Back to the amenity page</a>

</div>
</template>

<script>
import {db} from '../firebase'
export default {
    name: 'AmenDetail',
  props: {
    
  },
  data(){
      return{
      amenarray:[],
      amen: this.$route.params.id
      }
  },
  created(){
    db.collection("amenities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if(doc.id==this.amen)
    {
        this.amenarray.push(doc.data())
        console.log(this.amenarray)
        
    }
    });
    });
  }
}
</script>
