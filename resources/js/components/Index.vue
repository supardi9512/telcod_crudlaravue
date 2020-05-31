<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/create" class="btn btn-info float-right">Create New Post</router-link>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th width="120px"></th>
                        <th width="120px"></th>
                        <th width="120px"></th>
                    </tr>
                </thead>
                <tbody v-for="post in posts" :key="post.id">
                    <tr>
                        <td>{{ post.title }}</td>
                        <td>{{ post.description }}</td>
                        <td><button class="btn btn-info"><i class="fa fa-eye"></i> View</button></td>
                        <td><button class="btn btn-success"><i class="fa fa-edit"></i> Edit</button></td>
                        <td><button class="btn btn-danger"><i class="fa fa-trash"></i> Delete</button></td>
                    </tr>
                </tbody>
            </table>
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
        axios.get('/api/posts')
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