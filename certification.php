<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style/style.css">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <title>Portfolio</title>
</head>
<body>
    <!-- navbar -->
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container container-fluid">
                <a class="navbar-brand text-decoration-underline" href="#">Mark Lester Cuevo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav text-white">
                        <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div class="container certification-solo-page">
        <div class="row">
            <div class="col-6">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="w-100" src="./images/picture1.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="w-100" src="./images/picture2.png" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="w-100" src="./images/picture3.png" alt="Third slide">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-6">
                <p class="title color-primary">Barangay Requisition System</p>
                <p class="text-mini">September 2022 - November 2022</p>
                <p class="text-mini color-primary tags-project"><a href="">L |</a></p>
                <p class="text-mini color-primary tags-project"><a href="">HTML |</a></p>
                <p class="text-mini color-primary tags-project"><a href="">HTML |</a></p>
                <a href="#"><img src="./images/logos/github.png" id="github-icon" alt=""></a>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita excepturi minus eius rem, eaque, iusto unde sit iste tenetur in provident distinctio, adipisci beatae mollitia modi vel numquam ea. Perferendis.</p>
            </div>
        </div>
    </div>

        <!-- Footer -->
        <footer>
        <div class="container row">
            <div class="col text-center p-4 footer-text">
                © 2023 Copyright:
                <a class="text-reset fw-bold" href="index.php">Mark Lester Cuevo</a>
            </div>
            <div class="col p-4 footer-img">
                <a href="#"><img src="./images/logos/Linkedin.png" alt=""></a>
                <a href="#"><img src="./images/logos/Facebook.png" alt=""></a>
            </div>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js" integrity="sha512-ZKNVEa7gi0Dz4Rq9jXcySgcPiK+5f01CqW+ZoKLLKr9VMXuCsw3RjWiv8ZpIOa0hxO79np7Ec8DDWALM0bDOaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
</html>