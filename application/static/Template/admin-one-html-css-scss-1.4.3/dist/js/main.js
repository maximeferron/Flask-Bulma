Array.from(document.getElementsByClassName("jb-aside-toggle")).forEach(function(e){e.addEventListener("click",function(t){var s=e.getElementsByClassName("mdi")[0];document.getElementById(e.getAttribute("data-target")).classList.toggle("is-expanded"),document.documentElement.classList.toggle("has-aside-expanded"),s.classList.toggle("mdi-forwardburger"),s.classList.toggle("mdi-backburger")})}),Array.from(document.getElementsByClassName("jb-aside-mobile-toggle")).forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getElementsByClassName("icon")[0].getElementsByClassName("mdi")[0];document.documentElement.classList.toggle("has-aside-mobile-expanded"),t.classList.toggle("mdi-forwardburger"),t.classList.toggle("mdi-backburger")})}),Array.from(document.getElementsByClassName("jb-aside-right-toggle")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.documentElement.classList.toggle("has-aside-right")})}),Array.from(document.getElementsByClassName("jb-dropdown")).forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getElementsByClassName("submenu-icon")[0].getElementsByClassName("mdi")[0];e.currentTarget.parentNode.classList.toggle("is-active"),t.classList.toggle("mdi-plus"),t.classList.toggle("mdi-minus"),document.documentElement.classList.contains("has-aside-expanded")||(document.documentElement.classList.add("has-aside-expanded"),document.getElementById("aside-main").classList.add("is-expanded"),Array.from(document.getElementsByClassName("jb-aside-toggle")).forEach(function(e){var t=e.getElementsByClassName("mdi")[0];t.classList.remove("mdi-forwardburger"),t.classList.add("mdi-backburger")}))})}),Array.from(document.getElementsByClassName("jb-navbar-menu-toggle")).forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getElementsByClassName("icon")[0].getElementsByClassName("mdi")[0];document.getElementById(e.currentTarget.getAttribute("data-target")).classList.toggle("is-active"),t.classList.toggle("mdi-dots-vertical"),t.classList.toggle("mdi-close")})}),Array.from(document.getElementsByClassName("jb-modal")).forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-target");document.getElementById(t).classList.add("is-active"),document.documentElement.classList.add("is-clipped")})}),Array.from(document.getElementsByClassName("jb-modal-close")).forEach(function(e){e.addEventListener("click",function(e){e.currentTarget.closest(".modal").classList.remove("is-active"),document.documentElement.classList.remove("is-clipped")})}),Array.from(document.getElementsByClassName("jb-notification-dismiss")).forEach(function(e){e.addEventListener("click",function(e){e.currentTarget.closest(".notification").classList.add("is-hidden")})}),Array.from(document.getElementsByClassName("jb-has-perfect-scrollbar")).forEach(function(e){new PerfectScrollbar(e)});var asideSecondaryToggle=function(e){e.preventDefault();var t=document.getElementById("aside-main");Array.from(t.getElementsByClassName("is-active-original")).concat(Array.from(t.getElementsByClassName("is-active"))).forEach(function(e){e.classList.contains("jb-aside-secondary-toggle")||(e.classList.contains("is-active-original")?(e.classList.remove("is-active-original"),e.classList.add("is-active")):(e.classList.remove("is-active"),e.classList.add("is-active-original")))}),e.currentTarget.classList.contains("jb-aside-secondary-toggle")?e.currentTarget.classList.toggle("is-active"):Array.from(t.getElementsByClassName("jb-aside-secondary-toggle")).forEach(function(e){e.classList.remove("is-active")}),document.getElementById("aside-secondary").classList.toggle("is-hidden"),document.getElementById("ui-overlay").classList.toggle("is-hidden"),t.classList.toggle("has-secondary")};Array.from(document.getElementsByClassName("jb-aside-secondary-toggle")).forEach(function(e){e.addEventListener("click",asideSecondaryToggle)}),Array.from(document.getElementsByClassName("aside-close")).forEach(function(e){e.addEventListener("click",asideSecondaryToggle)}),document.getElementById("ui-overlay").addEventListener("click",asideSecondaryToggle);
