@extends('layouts.app')

@section('content')
<div class="container">
    <div class="jumbotron" id="jumbotron_index">
        <div class="text-center" id="x">
            <h1>Teluk Coding</h1>
            <p>CRUD Application Laravel and Vue JS</p>
        </div>

        <router-view></router-view>
    </div>      
</div>
@endsection
