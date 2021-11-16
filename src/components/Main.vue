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
        <div class="row">
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
          <!-- top navber -->
          <div class="col-lg-9"></div>
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
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 5px 7px 25px #999;
}
.bottom-border {
  border-bottom: 2px solid #eee;
}
.current {
  background-color: #f44336;
  border-radius: 7px;
  box-shadow: 2px 5px 10px #111;
}
.current:hover {
  background-color: #f66436;
  border-radius: 7px;
  box-shadow: 2px 5px 10px #111;
  transform: translateY(-1px);
}
</style>
