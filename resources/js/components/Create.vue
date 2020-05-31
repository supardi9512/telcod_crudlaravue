<template>
    <div class="container">
        <div class="card">
            <div class="card-header text-center">Create New Post</div>

            <div class="card-body">
                <!-- <form v-on:submit="submitPost()"> -->
                <form>
                    <div class="form-group">
                        <input type="text" v-model="posts.title" placeholder="Title" class="form-control">
                    </div>
                    <div class="form-group">
                        <textarea rows="5" v-model="posts.description" placeholder="Description" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <router-link to="/" class="btn btn-warning">Cancel</router-link>
                        <button type="button" @click="submitPost" class="btn btn-success">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data:function() {
    return {
      posts: {
          title: '',
          description: ''
      },
      errors: []
    }
  },
  methods: {
    // Fetches posts when the component is created.
    submitPost() {
        axios.post('/posts', this.posts)
        .then(response => {
            console.log(response);
            // JSON responses are automatically parsed.
            this.posts = response.data;
            this.$router.push({path: '/'});
        })
        .catch(e => {
        this.errors.push(e)
        })
    }
  }
}
</script>