<template>
    <nav class="cc-navbar navbar navbar-expand-lg position-fixed navbar-dark w-100">
        <div class="container-fluid">
            <a class="navbar-brand text-uppercase fw-bolder mx-4 py-3" href="#">Boutique de l'ombre</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item pe-4">
                        <a class="nav-link" haria-current="page" href="#Accueil">Accueille</a>
                    </li>
                    <li class="nav-item pe-4">
                        <a class="nav-link" href="#decouvrir">Decouvrir</a>
                    </li>
                    <li class="nav-item pe-4">
                        <a class="nav-link" href="#classique">Les classiques</a>
                    </li>
                    <li class="nav-item pe-4">
                        <a id="badge"
                            href="https://bff.ecoindex.fr/redirect/?url=https://teamsuperhero.madagascar.webcup.hodi.host/"
                            target="_blank">
                            <img src="https://bff.ecoindex.fr/badge/?theme=light&url=https://teamsuperhero.madagascar.webcup.hodi.host/"
                                alt="Ecoindex Badge" />
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/*     NAVBAR    */

#badge {
    transform: translateY(10px);
}

.cc-navbar {
    background-color: rgba(0, 0, 0, 0.55);
    font-family: 'Merriweather', serif;
    font-size: 20px;
    box-shadow: 1px 1px 3px rgba(255, 255, 255, 0.54);
    z-index: 99;
}

.simple_text {
    font-family: 'Redressed', serif;
    font-size: 25px;
}

.cc-navbar .nav-link {
    border-bottom: 1px solid transparent;
    transition: padding-bottom .4s ease-in-out, border-color .3s ease;
}

.navbar-nav li a:hover,
.navbar-nav li.active a {
    padding-bottom: 20px;
    border-bottom-color: var(--bs-teal);
}

.banner,
.order-form {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/img/fond.jpg') center center fixed no-repeat;
    background-size: cover;
    height: 700px;
}

.order-form {
    height: 500px;
}

.banner h1 {
    font-size: 48px;
    font-weight: 400;
    color: white;
}

.btn-order {
    color: var(--bs-teal);
    border-color: var(--bs-teal);
    transition: 0.5s;
}

.btn-order:hover,
.btn-order:active {
    color: white;
    background-color: var(--bs-teal);
}
</style>