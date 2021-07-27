<template>
  <div id="newActivityPage">
    <PageTitle title="New Activity" icon="fa fa-plus" />

    <div class="row mt-2 justify-content-center">
      <div class="col-md-8">
        <div class="tile">
          <h3 class="tile-title card-header text-center">Add New Activity</h3>
          <div class="tile-body">
            <form class="form-horizontal">
              <div class="form-group row">
                <label class="control-label col-md-3 text-center"
                  >Activity Name</label
                >
                <div class="col-md-8">
                  <input
                    v-model="activity.name"
                    :class="[{'form-control':true},{'is-invalid':errors.name}]"
                    type="text"
                    placeholder="Activity"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="control-label col-md-3 text-center"
                  >Coach Name</label
                >
                <div class="col-md-8">
                  <input
                    v-model="activity.coachName"
                    :class="[{'form-control':true},{'is-invalid':errors.coachName}]"
                    type="text"
                    placeholder="Coach"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="control-label col-md-3 text-center"
                  >Coach Phone Number</label
                >
                <div class="col-md-8">
                  <input
                    v-model="activity.coachPhoneNumber"
                    :class="[{'form-control':true},{'is-invalid':errors.coachPhoneNumber}]"
                    type="text"
                    placeholder="Coach Phone Number"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="control-label col-md-3 text-center">Price </label>
                <div class="col-md-8">
                  <input
                    v-model="activity.price"
                    :class="[{'form-control':true},{'is-invalid':errors.price}]"
                    type="text"
                    placeholder="EGP"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  class="control-label col-md-3 text-center"
                  for="descriptionTextarea"
                  >Description</label
                >
                <div class="col-md-8">
                  <textarea
                    v-model="activity.description"
                    :class="[{'form-control':true},{'is-invalid':errors.description}]"
                    id="descriptionTextarea"
                    rows="2"
                    placeholder="Describe The activity"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="tile-footer">
            <div class="row justify-content-center">
              <div class="col-md-0">
                <button @click="register" class="btn btn-primary" type="button">
                  <i class="fa fa-fw fa-lg fa-check-circle"></i>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../components/layout/pageTitle";

export default {
  components: { PageTitle },
  data() {
    return {
      activity: {
        name: null,
        coachName: null,
        coachPhoneNumber: null,
        price: 0,
        description: null,
      },
      errors: {},
    };
  },
  methods: {
    register: function () {
      const validate = this.validateForm();
      if (!validate) return false;
      this.$axios
        .$post("/activities/new", this.activity)
        .then((res) => {
          this.$store.commit("addActivity", res);
          this.$router.push("/activities");
          this.$swal.fire({
            icon: "success",
            title: "The activity is added successfully!!",
          });
        })
        .catch((err) => {
          console.log(err);
          //TODO - Use sweet Alert @AhmedGamal77823
          //alert("There is an error while adding new activity!");
        });
    },
    validateForm: function () {
      this.errors = {};
      let inputs = Object.keys(this.activity);
      let pass = true;
      inputs.forEach((i) => {
        if (!this.activity[i] || !this.activity[i].length) {
          pass = false;
          this.errors[i] = `${i} is required`;
        }
      });
      return pass;
    },
  },
};
</script>
