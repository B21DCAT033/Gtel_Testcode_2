class SolarSystem {
    constructor(planets) {
        this.planets = planets;
        this.init();
    }

    init() {
        var count = 1;
        this.planets.forEach((planet) => {
            // Tạo orbit container
            const orbitContainer = document.createElement('div');
            orbitContainer.className = 'planet-orbit';
            orbitContainer.style.animation = `orbit ${planet.duration}s linear infinite`;

            // Tạo planet container
            const container = document.createElement('div');
            container.className = 'planet-container';
            container.style.left = `${planet.radius}px`;
            container.style.animation = `counter-orbit ${planet.duration}s linear infinite`;

            // Tạo dot
            const dot = document.createElement('div');
            dot.className = 'dot';

            // Tạo label
            const label = document.createElement('div');
            label.className = 'planet-label';

            // Thêm logo và tên
            const img = new Image();
            img.src = planet.logo;
            img.alt = planet.name;
            img.id = `img${count++}`;
            img.onload = function () {
                console.log("Image width:", img.width);
                console.log("Image height:", img.height);

                // Now, you can append it to the DOM
                label.appendChild(img);
            };

            // Tạo tooltip mới với profile
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerHTML = `
                        <div class="profile">
                            <div class="user">
                                <div class="img">Ui</div>
                                <div class="details">
                                    <div class="name">${planet.name}</div>
                                    <div class="username">@${planet.name.toLowerCase()}</div>
                                </div>
                            </div>
                            <div class="about">${planet.connections} Connections</div>
                        </div>
                    `;

            // Ghép các phần tử
            container.appendChild(dot);
            container.appendChild(label);
            container.appendChild(tooltip);
            orbitContainer.appendChild(container);

            // Click event
            container.addEventListener('click', () => {
                console.log(`Clicked ${planet.name}`);
                // Thêm logic điều hướng ở đây
            });

            container.addEventListener('mouseenter', () => {
                container.style.animationPlayState = 'paused';
                orbitContainer.style.animationPlayState = 'paused';
            });

            container.addEventListener('mouseleave', () => {
                container.style.animationPlayState = 'running';
                orbitContainer.style.animationPlayState = 'running';
            });

            document.querySelector('.solar-system').appendChild(orbitContainer);
        });
    }
}
