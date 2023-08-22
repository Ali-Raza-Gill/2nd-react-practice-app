import React from 'react'

export default function Header() {
    return (<>
    
                        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                            <div className="container">
                            <a class="navbar-brand " href="#">Navbar</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link text-white" href="#">Home </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link  text-white" href="#">Services </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link text-white" href="#">Sections </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link text-white" href="#">Team  </a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link text-white" href="#">About </a>
                                    </li>
                                   
                                </ul>
                            </div>
                            </div>
                        </nav>
                   </>
       
            
       
    )
}
