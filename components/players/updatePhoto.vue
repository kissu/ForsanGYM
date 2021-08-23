<template>
  <div class="modal fade" id="updatePhotoModal" tabindex="-1" aria-labelledby="updatePhotoModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updatePhotoModalLabel">Upload The New Photo</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input ref='UploadedFile' class="form-control" type="file" id="updatePhoto">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="resetForm">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="updatePhoto">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "updatePhoto",
  props:{
    player:{
      type:Object,
      required:true
    },
    MEDIA_API:{
      required: true
    }
  },
  methods:{
    resetForm: function (){
      document.getElementById("updatePhoto").value = ""
    },

    updatePhoto:async function (){
      let formData = new FormData(), photo, formPlayer = Object.assign({}, this.player)
      if(this.$refs.UploadedFile.files[0]){
        formData.append('file', this.$refs.UploadedFile.files[0])
        try {
          photo = await axios.post(`${this.MEDIA_API}/photo/update?phone=${this.player.phoneNumber}`, formData)
          formPlayer.photo = photo.data.url
        } catch (e) {
          this.player.photo = "";
          console.log('Photo not uploaded');
        }
          try{
            const resPlayer = await this.$axios.$post('/player/edit/'+formPlayer.id, formPlayer);
            await this.$store.commit('editViewPlayer', resPlayer)
          }catch (err){
            this.$swal.fire({
              title:"error happened",
              icon:"error",
              text:err
            })
            console.log(err)
          }

      }else{
        this.$swal.fire({
          title:"Choose a photo",
          icon:"error"
        })
      }
      this.resetForm()
    }
  }
}
</script>

<style scoped>

</style>
