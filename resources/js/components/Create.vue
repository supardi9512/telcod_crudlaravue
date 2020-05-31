<template>
    <div class="container">
        <div class="card">
            <div class="card-header text-center">Create New Post</div>

            <div class="card-body">
                <form action="">
                    <div class="form-group">
                        <input type="text" name="" placeholder="Title" class="form-control">
                    </div>
                    <div class="form-group">
                        <textarea rows="5" name="" placeholder="Description" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <router-link to="/" class="btn btn-warning">Cancel</router-link>
                        <button class="btn btn-success">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
