<template>
    <div class="home-page-container">
        <h1>Book a meeting room</h1>
        <div class="row1">
            <div class="item-container">
                <img class="hall-img" src="../assets/room1.jpg" alt="meeting room 1 picture">
                <p class="">Eddison Hall</p>
            </div>
            <div class="item-container">
                <img class="hall-img" src="../assets/room2.jpg" alt="meeting room 2 picture">
                <p class="">Harry Hall</p>
            </div>
            <div class="item-container">
                <img class="hall-img" src="../assets/room3.jpg" alt="meeting room 32 picture">
                <p class="">Jaja Hall</p>
            </div>
            <div class="item-container">
                <img class="hall-img" src="../assets/room4.jpg" alt="meeting room 4 picture">
                <p class="">Griffin Hall</p>
            </div>
        </div>

        <div class="row2">
            <table>
              <tr>
                <th>Hall Name</th>
                <th>Capacity</th>
              <th>Reason</th>
              <th>Status</th>
              <!-- <th></th> -->
              </tr>

              <tr v-for="hall in halls.data" v-bind:key = "hall.id">
                <td>{{hall.hallName}}</td>
                <td>{{hall.capacity}}</td>
                <td>{{hall.reason}}</td>
                <!-- <td class="status">{{hall.status}}</td> -->
                <td>
                    <button class="button"
                    @click="isBooked(hall)"

                    :class= "[meetingRoom === hall ? 'taken' : '']"
                    >
                        <!-- {{hall.status}} -->
                        {{hall.status === 'Available' ? 'Available' : 'Unavailable'}}
                    </button>
                </td>
              </tr>
            </table>

        </div>

    </div> <!--ending div for the page content-->
</template>

<script>
import axios from 'axios';

export default {
    name: 'Cabasa',
    components: {

    },
    data() {
        return {
            halls: [],
            meetingRoom: null,
            id: ''
        }
    },
    watch: {
        hall: {
            immediate: true,
            handler() {
                this.booked()
            }
        }
    },
    created: function(){
        this.cabasahalls();
    },
    methods: {
        // booked(id, status){
        //     axios.put(`http://cabasa.test/api/cabasa/{$id}`, {
        //         status,
        //     })
        //         .then(() => this.halls.find(hall => hall.id === id).status = status)
        //         .catch(err => console.log(err));
        // }
        booked(id, status) {
            axios.put(`http://cabasa.test/api/cabasa/{$id}`, {
                status                
            })
            .then(() => this.halls.find(hall => hall.id === id).status = status)
            .catch(err => console.log(err));
          },
        isBooked(hall){
            this.meetingRoom = hall
        },
        cabasahalls() {
          axios.get('http://cabasa.test/api/cabasas')
          .then(res => this.halls =res.data)
           .catch(err => console.log(err));
        }
    }

} // end of component class
</script>

<style scoped>

.home-page-container, .item-container {
    text-align: center;
}

.home-page-container h1 {
    margin-top: 40px;
}

.row1{
    display: flex;
    justify-content: space-around;
    margin-top: 2%;
    padding: 3%;
}

.row2 {
    margin: 5%;
    padding: 0 5%;
    text-align: center;
}

.hall-img {
    width: 250px;
    height: 200px;
    margin-bottom: 10px;
    transition: width 2s;
    -webkit-transition: width 0.5s; /* Safari 3.1 to 6.0 */
}

.item-container {
    padding: 20px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


/*hover effect*/
.item-container:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.button {
    width: 100px;
    border: none;
    border-radius: 3%;
    font-weight: 400;
    background-color: #cc0044;
    color: #fff;
}

.taken {
    background-color: #ff0055;
    cursor: not-allowed;
}

.status {
    /* background-color: #00e600; */
}

</style>
