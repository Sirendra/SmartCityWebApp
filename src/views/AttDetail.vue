<template>
<div class="container" style="overflow:hidden;">
    <div class="location_title" style="padding-top: 30px;">   
            <h1 class="loc_title" style="text-align: center;">{{attarray[0].attname}}</h1>
            <br>
        </div>

        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" style="padding-left:30px; padding-right:30px;" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img v-bind:src="attarray[0].attimageUrl" class="d-block w-100" style="height: 400px" alt="picture1">
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
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{attarray[0].attname}}</td>
                        <td>{{attarray[0].attcat}}</td>
                        <td>{{attarray[0].attloca}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
         <a href="/place" style="margin-left:30px;">Back to the attraction page</a>

</div>
</template>

<script>
import {db} from '../firebase'
export default {
    name: 'AttDetail',
  props: {
    
  },
  data(){
      return{
      attarray:[],
      att: this.$route.params.id
      }
  },
  created(){
    db.collection("attractions").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        if(doc.id==this.att)
    {
        this.attarray.push(doc.data())
        console.log(this.attarray)
        
    }
    });
    });
  }
}
</script>
