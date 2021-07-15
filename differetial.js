parabola()
// hyperbolic()
// ellipse()

function parabola() {
    const n = 20
    const u = [n + 1];
    const w = [n + 1];
    const k = 0.001
    let h, r, s;
    let i, j;

    // 定数
    h = 1.0 / n
    r = k / (h * h)
    s = 1.0 - 2.0 * r

    for (i = 0; i <= n; i++) {
        w[i] = 0.0
    }
    for (i = 1; i < n; i++) {
        u[i] = 1.0
    }
    u[0] = 0.0
    u[n] = 0.0

    for (j = 1; j <= 200; j++) {
        if ((j % 10) == 0) {
            console.log((j * k).toFixed(5))
            for (i = 0; i < n; i += 2) {
                console.log((u[i]).toFixed(5))
            }
            console.log("\n")
        }
        for (i = 1; i < n; i++) {
            w[i] = r * (u[i + 1] + u[i - 1]) + s * u[i]
        }
        for (i = 1; i < n; i++) {
            u[i] = w[i]
        }
    }

}

function hyperbolic() {
    const n = 20
    const u = [n + 1];
    const v = [n + 1];
    const w = [n + 1];
    const k = 0.01
    let h, r, s, q;
    let i, j;

    // 定数
    h = 1.0 / n
    r = k / h
    q = r * r
    s = 2.0 * (1.0 - q)

    for (i = 0; i <= n / 2; i++) {
        u[i] = i / n
    }
    for (i = n / 2; i <= n; i++) {
        u[i] = 1.0 - i / n
    }
    for (i = 0; i <= n; i++) {
        v[i] = u[i]
    }
    for (i = 0; i <= n; i++) {
        w[i] = 0.0
    }

    for (j = 0; j <= 200; j++) {
        if ((j % 10) == 0) {
            console.log((j * k).toFixed(3))
            for (i = 0; i < n; i += 2) {
                console.log((u[i]).toFixed(3))
            }
            console.log("\n")
        }
        for (i = 1; i < n; i++) {
            w[i] = q * (u[i + 1] + u[i - 1]) + s * u[i] - v[i]
        }
        for (i = 0; i <= n; i++) {
            v[i] = u[i]
            u[i] = w[i]
        }
    }

}

function ellipse() {
    const u = Array.from(new Array(11), () => new Array(11).fill(0.0));
    const w = Array.from(new Array(11), () => new Array(11).fill(0.0));

    let dd = 0.0
    let u1, u2;
    let i, j, nh = 10;

    for (i = 1; i < nh; i++) {
        u[i][nh] = 1.0
    }

    do {
        dd = 0.0;
        for (i = 1; i < nh; i++) {
            for (j = 1; j < nh; j++) {
                u1 = u[i + 1][j] + u[i - 1][j]
                u2 = u[i][j + 1] + u[i][j - 1]
                u[i][j] = (u1 + u2) / 4.0
                dd += Math.abs(w[i][j] - u[i][j])
                w[i][j] = u[i][j]
            }
        }
    } while (dd > 0.001);

    for (i = 0; i <= nh; i++) {
        for (j = 0; j <= nh; j++) {
            console.log((u[i][j]).toFixed(3))
        }
        console.log("\n")
    }

}

