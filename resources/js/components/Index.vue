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
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td><button class="btn btn-info"><i class="fa fa-eye"></i> View</button></td>
                        <td><button class="btn btn-success"><i class="fa fa-edit"></i> Edit</button></td>
                        <td><button class="btn btn-danger"><i class="fa fa-trash"></i> Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>