/********** Template CSS **********/
:root {
    --primary: #003368;
    --secondary: #F57E57;
    --light: #EEF9FF;
    --dark: #091E3E;
}

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: var(--dark);
    background: #fff;
    overflow-x: hidden;
}

img,
svg,
iframe,
video,
object,
embed {
    max-width: 100%;
    display: block;
}

img {
    height: auto;
}

a,
button,
input,
textarea,
select {
    -webkit-tap-highlight-color: transparent;
}

h1,
h2,
.font-weight-bold {
    font-weight: 700 !important;
}

h3,
h4,
.font-weight-semi-bold {
    font-weight: 600 !important;
}

h5,
h6,
.font-weight-medium {
    font-weight: 500 !important;
}

.btn {
    font-family: 'Jost', sans-serif;
    font-weight: 600;
    transition: .5s;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
}

.btn-primary,
.btn-secondary {
    color: #FFFFFF;
}

.btn-primary:hover {
    background: var(--secondary);
    border-color: var(--secondary);
}

.btn-secondary:hover {
    background: var(--primary);
    border-color: var(--primary);
}

.btn-square {
    width: 36px;
    height: 36px;
}

.btn-sm-square {
    width: 28px;
    height: 28px;
}

.btn-lg-square {
    width: 46px;
    height: 46px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
}

#spinner {
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease-out, visibility 0s linear .5s;
    z-index: 99999;
}

#spinner.show {
    transition: opacity .5s ease-out, visibility 0s linear 0s;
    visibility: visible;
    opacity: 1;
}

.back-to-top {
    position: fixed;
    display: none;
    right: 45px;
    bottom: 45px;
    z-index: 99;
}

.top-shape::before {
    position: absolute;
    content: "";
    width: 35px;
    height: 100%;
    top: 0;
    left: -17px;
    background: var(--primary);
    transform: skew(40deg);
}

.navbar-light .navbar-nav .nav-link {
    font-family: 'Jost', sans-serif;
    padding: 35px 15px;
    font-size: 18px;
    color: var(--dark);
    outline: none;
    transition: .5s;
}

.sticky-top.navbar-light .navbar-nav .nav-link {
    padding: 20px 15px;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
    color: var(--primary);
}

.navbar-toggler {
    min-width: 44px;
    min-height: 44px;
    padding: .5rem .75rem;
    border: 1px solid rgba(0, 51, 104, 0.2);
}

.navbar-toggler:focus {
    box-shadow: none;
}

.navbar-brand {
    max-width: 100%;
}

.navbar-brand h1 {
    line-height: 1.2;
    font-size: clamp(1.1rem, 2vw, 2.1rem);
    word-break: break-word;
}

.carousel-caption {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(9, 30, 62, .85);
    z-index: 1;
    padding: 1.5rem;
}

.carousel-caption .p-3 {
    max-width: 900px;
}

.carousel-control-prev,
.carousel-control-next {
    width: 10%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 3rem;
    height: 3rem;
}

.section-title h5::before {
    position: absolute;
    content: "";
    width: 45px;
    height: 3px;
    right: -55px;
    bottom: 11px;
    background: var(--primary);
}

.section-title h5::after {
    position: absolute;
    content: "";
    width: 15px;
    height: 3px;
    right: -75px;
    bottom: 11px;
    background: var(--secondary);
}

.hero-header {
    background: linear-gradient(rgba(9, 30, 62, .85), rgba(9, 30, 62, .85)), url(../img/carousel-1.jpg) center center no-repeat;
    background-size: cover;
}

.service-item img,
.service-item .bg-light,
.service-item .bg-light h5,
.team-item .team-text {
    transition: .5s;
}

.service-item:hover img {
    transform: scale(1.15);
}

.team-item .team-text::after,
.service-item .bg-light::after {
    position: absolute;
    content: "";
    top: 50%;
    bottom: 0;
    left: 15px;
    right: 15px;
    border-radius:100px / 15px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .7);
    opacity: 0;
    transition: .5s;
    z-index: -1;
}

.team-item:hover .team-text::after,
.service-item:hover .bg-light::after {
    opacity: 1;
}

.form-control,
.form-select {
    min-height: 52px;
    font-size: 1rem;
}

textarea.form-control {
    min-height: 120px;
}

#whatsappForm .btn,
.navbar-nav .nav-item a,
.footer a,
.btn-primary,
.btn-secondary {
    min-height: 44px;
}

@media (max-width: 991.98px) {
    .navbar-light .navbar-nav .nav-link,
    .sticky-top.navbar-light .navbar-nav .nav-link {
        padding: 10px 0;
    }

    .nav-item {
        width: 100%;
    }

    .navbar-collapse {
        border-top: 1px solid rgba(9, 30, 62, .08);
        margin-top: .75rem;
        padding-top: .75rem;
    }

    .navbar-nav {
        width: 100%;
    }

    .navbar-nav .nav-link {
        font-size: 1rem;
    }

    .back-to-top {
        right: 1rem;
        bottom: 1rem;
    }
}

@media (max-width: 767.98px) {
    .container,
    .container-fluid {
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    .navbar {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }

    .navbar-brand {
        max-width: calc(100% - 62px);
    }

    .navbar-brand h1 {
        white-space: normal;
        font-size: clamp(1rem, 4vw, 1.4rem);
    }

    .top-shape::before {
        display: none;
    }

    .carousel-caption {
        padding: 1rem;
    }

    .carousel-caption .p-3 {
        max-width: 100%;
    }

    .carousel-caption h5 {
        font-size: 0.8rem;
        margin-bottom: .5rem !important;
        letter-spacing: .06em;
    }

    .carousel-caption h1 {
        font-size: clamp(2rem, 8vw, 3rem);
        margin-bottom: .75rem !important;
    }

    .carousel-caption .d-flex {
        display: flex !important;
        flex-direction: column !important;
        align-items: center;
        gap: .75rem;
    }

    .carousel-caption .btn {
        width: 100%;
        max-width: 220px;
        margin: 0 !important;
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 12%;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        width: 2.25rem;
        height: 2.25rem;
    }

    .section-title h5::before,
    .section-title h5::after {
        display: none;
    }

    .display-1,
    .display-3,
    .display-5,
    .display-6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        word-break: break-word;
        overflow-wrap: break-word;
    }

    .display-1 {
        font-size: clamp(2.25rem, 9vw, 4rem) !important;
    }

    .display-3 {
        font-size: clamp(2rem, 7vw, 3rem) !important;
    }

    .display-5 {
        font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
    }

    .display-6 {
        font-size: clamp(1.5rem, 5vw, 2rem) !important;
    }

    .hero-header {
        padding-top: 2.5rem !important;
        padding-bottom: 2.5rem !important;
    }

    .hero-header .row {
        margin: 0;
    }

    .service-item {
        width: 100%;
    }

    .service-item img {
        height: 220px !important;
    }

    .service-item .text-center p-4,
    .service-item .position-relative.bg-light {
        padding: 1rem !important;
    }

    .service-item h5,
    .service-item .m-0 {
        font-size: 1rem;
        line-height: 1.5;
    }

    .bg-light.rounded.h-100.p-5,
    .bg-primary.rounded.h-100.d-flex.flex-column {
        padding: 1.5rem !important;
    }

    .contact-item,
    .d-flex.align-items-center {
        align-items: flex-start !important;
    }

    .contact-item .bi,
    .d-flex.align-items-center .bi,
    .d-flex.align-items-center i {
        font-size: 1.5rem !important;
        margin-right: .75rem !important;
    }

    iframe {
        min-height: 300px !important;
    }

    .footer .col-lg-3,
    .footer .col-md-6 {
        width: 100%;
        max-width: 100%;
    }

    .footer .row {
        --bs-gutter-y: 1rem;
    }

    .footer a,
    .footer p,
    .footer span {
        font-size: 0.96rem;
        word-break: break-word;
    }

    .footer .d-flex {
        flex-wrap: wrap;
    }

    .footer .btn {
        margin-bottom: .5rem;
    }

    .back-to-top {
        width: 46px;
        height: 46px;
        border-radius: 999px;
    }
}

@media (max-width: 480px) {
    body {
        font-size: 15px;
    }

    .navbar-brand h1 {
        font-size: 1rem;
    }

    .navbar-toggler {
        padding: .35rem .5rem;
    }

    .btn,
    .form-control,
    .form-select,
    input,
    textarea,
    button {
        min-height: 44px;
    }

    .carousel-caption h1 {
        font-size: clamp(1.7rem, 8vw, 2.5rem);
    }

    .carousel-caption .btn {
        max-width: 100%;
    }

    .section-title {
        margin-bottom: 1.5rem !important;
    }

    .container-fluid.py-5,
    .container-fluid.py-5.wow.fadeInUp {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }

    .row.g-5,
    .row.g-4 {
        --bs-gutter-y: 1rem;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .service-item {
        width: 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    .navbar-brand h1 {
        font-size: clamp(1.1rem, 2.5vw, 1.8rem);
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .navbar-brand h1 {
        font-size: clamp(1.2rem, 2vw, 1.8rem);
    }

    .carousel-caption h1 {
        font-size: clamp(2.8rem, 4vw, 4rem);
    }

    .service-item {
        width: 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (min-width: 1025px) {
    .service-item {
        width: 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

@media (max-width: 991.98px) {
    .d-none.d-lg-block {
        display: none !important;
    }
}
