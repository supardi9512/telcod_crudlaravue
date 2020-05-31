<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/"><i class="fa fa-arrow-left"></i></router-link>
        </div>
        <div class="card-body">
            <h2>{{ posts.title }}</h2>
            <hr>
            <p>{{ posts.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created: function() {
      this.getPosts();
  },
  // Fetches posts when the component is created.
  methods: {
    getPosts() {
        let id = this.$route.params.id;
        axios.get('/api/posts/' + id)
        .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        })
        .catch(e => {
        this.errors.push(e)
        })
    }
  }
}
</script>