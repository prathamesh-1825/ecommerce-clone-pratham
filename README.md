# Shop With Pratham 🛒

Welcome to **Shop With Pratham**, a modern and responsive eCommerce website built using **HTML** and **CSS**. This project is designed to provide a clean and user-friendly shopping experience with an attractive interface.

## 🌟 Features

* Responsive and modern UI
* Beautiful homepage design
* Product showcase section
* Navigation bar with menu items
* Shopping cart icon integration
* Footer with social media links
* Mobile-friendly layout
* Easy to customize and extend

## 🛠️ Technologies Used

* HTML5
* CSS3

## 📂 Project Structure

```bash
Shop-With-Pratham/
│
├── index.html
├── style.css
├── images/
│   ├── logo.png
│   ├── banner.jpg
│   └── products/
├── assets/
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/Shop-With-Pratham.git
```

2. Open the project folder:

```bash
cd Shop-With-Pratham
```

3. Run the project by opening `index.html` in your browser.

## 🎯 Future Enhancements

* Add JavaScript functionality
* User Authentication (Login & Signup)
* Shopping Cart System
* Payment Gateway Integration
* Product Search & Filters
* Backend Integration (Node.js & MongoDB)
* Order Tracking System

## 📸 Preview

> A clean and responsive eCommerce website built for learning and showcasing front-end development skills.

## 👨‍💻 Author

**Prathamesh Bachchhav**

* GitHub: `prathamesh-1825`

## 📜 License

This project is licensed under the MIT License.

---

### "Shop smart, shop easy, Shop With Pratham!"



<!-- Html File -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazone</title>
<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
crossorigin="anonymous"
referrerpolicy="no-referrer" />    <link rel="stylesheet" href="style.css">
</head>
<body>
   <header>
    <div class="navbar">

        <!-- Logo -->
        <div class="nav-logo border">
            <div class="logo"></div>
        </div>

        <!-- Address -->
        <div class="nav-address border">
            <p class="add-first">Deliver to</p>
            <div class="add-icon">
                <i class="fa-solid fa-location-crosshairs"></i>
                <p class="add-sec">India</p>
            </div>
        </div>

        <!-- Search Bar -->
        <div class="nav-search">
            <select class="search-select">
                <option>All</option>
            </select>

            <input
                type="text"
                placeholder="Search Amazon"
                class="search-input"
            >

            <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>

        <!-- Sign In -->
        <div class="nav-signin border">
            <p><span>Hello, sign in</span></p>
            <b>Account & Lists</b>
        </div>

        <!--Order-->

        <div class="nav-return border">
            <p><span>Returns</span></p>
            <b class="nav-second">& Order</b>
        </div>


        

    </div>
</header>
</body>
</html>


Please suggest me comments and correct the code



<!-- CSS -->
*{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    border: border-box;

}



.navbar{
    height: 60px;
    background-color: rgb(0, 0, 0);
    color:thistle;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
/** Box 1 **/
.nav-logo{
    height: 50px;
    width: 100px;
}

.logo{
    background-image: url("frount_corner_ogo.png");
    background-size: cover;
    height: 50px;
    width: 100%;
}

.border{
    border: 2px solid transparent;
}

.border:hover{
    border: 2px solid white;
}

/** Box 2 **/
.add-first{
    color: #cccccc;
    font-size: 1rem;
    margin-left:25px;
    
}

.add-sec{
    color: #ffffff;
    margin-left: 2px;
    
}

.add-icon{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.2rem;
    color: #ffffff;
}


/** Box 3 **/
.nav-search{
   margin-left: 10px;
   display: flex;
   justify-content: space-evenly;
   /* background-color: pink; */
   width: 620px;
   height: 40px;
   border-radius: 4px;
}

.nav-search:hover{
    border: 2px solid orange;

}

.search-select{
    background-color: #f3f3f3;
    width: 50px;
    text-align: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: none;

}

.search-input{
    width: 100%;
    font-size: 1rem;
    border: none;
}

.search-icon{
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: rgb(227, 160, 14);
     border-top-right-radius: 4px;
    border-bottom-right-radius: 4px

}

/** Box 4 **/

span{
    font-size: 0.85;
}






