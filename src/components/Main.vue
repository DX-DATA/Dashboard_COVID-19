<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-md navber-light">
    <button
      class="navbar-toggler ml-auto mb-2 bg-light"
      type="button"
      data-toggle="collapse"
      data-target="#sidebar"
    >
      <span class="navber-toggle-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="sidebar">
      <div class="container-fluid">
        <!-- top navber -->
        <div class="ml-auto bg-dark fixed-top py-3 top-navbar">
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-2">
              <h4 class="text-light text-uppercase mb-0">Dashboard</h4>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-3"></div>
          </div>
        </div>
        <!-- sidebar -->
        <div class="col-lg-2 sidebar fixed-top">
          <a
            href="#"
            class="
              navbar-brand
              text-white text-center
              d-block
              mx-auto
              py-3
              mb-4
              bottom-border
            "
            >COVID-19</a
          >
          <ul class="navbar-nav flex-column mt-4">
            <li class="nav-item">
              <a href="#" class="nav-link text-white p-3 mb-2 current">
                <font-awesome-icon icon="home" />
                Dashboard
              </a>
              <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                <font-awesome-icon icon="wrench" />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Main',
  props: {},
};
</script>

<style>
.sidebar {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bottom-border {
  border-bottom: 2px solid #eee;
}
.current {
  background-color: #f44336;
  border-radius: 7px;
}
.current:hover {
  background-color: #f66436;
  border-radius: 7px;
  box-shadow: 2px 5px 10px #111;
  transform: translateY(-1px);
}
</style>
