<!--<template>-->
    <!--<div class="container">-->
        <!--<div class="row">-->

            <!--<div v-if="success != ''" class="alert alert-success col-md-12" role="alert">-->
                <!--{{success}}-->
            <!--</div>-->

            <!--<div class="col-md-3" v-if="image">-->
                <!--<img :src="image" class="img-responsive" height="70" width="90">-->
            <!--</div>-->

            <!--<form class="col-12 "  @submit="formSubmit" enctype="multipart/form-data">-->
                <!--<div class="row">-->
                    <!--<div class="col-12">-->
                        <!--<div class="custom-file">-->
                            <!--<input type="file" class="custom-file-input"  accept="image/*" v-on:change="onImageChange">-->
                            <!--<label class="custom-file-label" for="customFile">Choose file</label>-->

                        <!--</div>-->
                    <!--</div>-->


                    <!--&lt;!&ndash;<div class="col-12">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="form-group">&ndash;&gt;-->
                            <!--&lt;!&ndash;<textarea class="form-control" v-model="description" placeholder="description"></textarea>&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->


                    <!--<div class="col-12 col-lg-6">-->
                        <!--<a href="/" class="btn btn-outline-primary btn-lg btn-block mb-3">Back</a>-->
                    <!--</div>-->
                    <!--<div class="col-12 col-lg-6">-->
                        <!--<button type="submit" class="btn btn-outline-success btn-lg btn-block mb-3" >Save</button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</form>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import { API_BASE_URL } from '../config'-->
    <!--import VueUploadMultipleImage from 'vue-upload-multiple-image'-->

    <!--export default {-->
        <!--components: {-->
            <!--VueUploadMultipleImage,-->
        <!--},-->
        <!--data() {-->
            <!--return {-->
                <!--image: '',-->
                <!--qr: '',-->
                <!--description:'',-->
                <!--success: '',-->
            <!--};-->
        <!--},-->

        <!--methods:{-->
            <!--onImageChange(e){-->
               <!--// console.log(e.target.files[0]);-->
                <!--this.image = e.target.files[0];-->

                <!--this.createImage(this.image );-->

            <!--},-->
            <!--createImage(file) {-->
                <!--let reader = new FileReader();-->
                <!--let vm = this;-->
                <!--reader.onload = (e) => {-->
                    <!--vm.image = e.target.result;-->
                <!--};-->
                <!--reader.readAsDataURL(file);-->
            <!--},-->
            <!--formSubmit(e) {-->
                <!--e.preventDefault();-->
                <!--let currentObj = this;-->
                <!--const config = {-->
                    <!--headers: { 'content-type': 'multipart/form-data' }-->
                <!--}-->
                <!--let formData = new FormData();-->
                <!--formData.append('image', this.image);-->
                <!--formData.append('description', this.description);-->

                <!--this.$axios.post(API_BASE_URL + '/image/store', formData, config)-->
                    <!--.then(function (response) {-->
                        <!--currentObj.success = response.data.success;-->
                        <!--this.allerros = [];-->
                    <!--})-->
                    <!--.catch(function (error) {-->
                       <!--// console.log(error)-->
                        <!--currentObj.output = error;-->
                        <!--this.success = '';-->

                    <!--});-->

                <!--this.description ='';-->
                <!--this.image ='';-->
            <!--}-->
        <!--}-->

    <!--}-->


<!--</script>-->



<template slot="HEAD_Status" slot-scope="{}">
    <div class="container">
        <div v-if="success != ''" class="alert alert-success col-md-12" role="alert">
        {{success}}
        </div>

        <div class="row">
    <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
        <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                @data-change="dataChange"
                @limit-exceeded="limitExceeded"
        ></vue-upload-multiple-image>
    </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-6">
                <a href="/" class="btn btn-outline-primary btn-lg btn-block mb-3">Back</a>
            </div>
            <!--<div class="col-12 col-lg-6">-->
                <!--<button type="submit" class="btn btn-outline-success btn-lg btn-block mb-3" >Save</button>-->
            <!--</div>-->
        </div>
    </div>


</template>

<script>
    import VueUploadMultipleImage from './ImageProcess'
    // import axios from 'axios'
    import { API_BASE_URL } from '../config'

    export default {
        rules: {
            'no-console': 0,
        },
        name: 'app',
        data () {
            return {
                success: ''
            }
        },
        components: {
            VueUploadMultipleImage
        },
        methods: {
            uploadImageSuccess(formData, index, fileList) {
                console.log('data', formData, index, fileList)
             //   Upload image api
                let currentObj = this;

                this.$axios.post(API_BASE_URL + '/image/store', formData).then(response => {
                  console.log(response)
                  currentObj.success = response.data.success;
                  this.allerros = [];
                })
                .catch(function (error) {
                // console.log(error)
                    currentObj.output = error;
                    this.success = '';

                    });

            },
            beforeRemove (index, done, fileList) {
                console.log('index', index, fileList)
                var r = confirm("remove image")
                if (r == true) {
                    done()
                } else {
                    console.log('edit data')
                }
            },
            editImage (formData, index, fileList) {
                console.log('edit data', formData, index, fileList)
            },
            dataChange (data) {
                console.log(data)
            },
            limitExceeded(amount){
                console.log(amount)
            }
        }
    }
</script>



