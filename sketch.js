let radius = 20;
let isShrinking = false;
let returnRate = 0;
let wasTouchingLeft = false;
let wasTouchingRight = false;
let wasTouchingTop = false;
let wasTouchingBottom = false;
let circleColor;
let temporaryCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noFill();
  strokeWeight(2);
  stroke(0);
  circleColor = color(0);
}

function draw() {
  background(255);

  let growthRate;

  if (mouseX < width / 2 && mouseY < height / 2) {
    growthRate = 0;
  } else if (mouseX >= width / 2 && mouseY < height / 2) {
    growthRate = 20;
  } else if (mouseX < width / 2 && mouseY >= height / 2) {
    growthRate = 40;
  } else {
    growthRate = 60;
  }

  const radiusChange = growthRate * deltaTime / 1000;

  if (isShrinking) {
    radius = max(20, radius - returnRate * deltaTime / 1000);
    if (radius === 20) {
      isShrinking = false;
    }
  } else {
    radius = min(200, radius + radiusChange);
    if (radius === 200) {
      isShrinking = true;
      returnRate = growthRate;
    }
  }

  const touchingLeft = mouseX - radius <= 0;
  const touchingRight = mouseX + radius >= width;
  const touchingTop = mouseY - radius <= 0;
  const touchingBottom = mouseY + radius >= height;

  if (
    (touchingLeft && !wasTouchingLeft) ||
    (touchingRight && !wasTouchingRight) ||
    (touchingTop && !wasTouchingTop) ||
    (touchingBottom && !wasTouchingBottom)
  ) {
    circleColor = color(random(256), random(256), random(256));

    const circleCount = floor(random(1, 11));
    const createdAt = millis();

    for (let i = 0; i < circleCount; i++) {
      temporaryCircles.push({
        x: mouseX,
        y: mouseY,
        velocityX: random(-80, 80),
        velocityY: random(-80, 80),
        radius: random(2.5, 10),
        radiusGrowth: random(2, 4),
        color: color(random(256), random(256), random(256)),
        createdAt: createdAt
      });
    }
  }

  wasTouchingLeft = touchingLeft;
  wasTouchingRight = touchingRight;
  wasTouchingTop = touchingTop;
  wasTouchingBottom = touchingBottom;

  const currentTime = millis();
  for (let i = temporaryCircles.length - 1; i >= 0; i--) {
    const temporaryCircle = temporaryCircles[i];
    const elapsed = currentTime - temporaryCircle.createdAt;

    if (elapsed >= 3000) {
      temporaryCircles.splice(i, 1);
      continue;
    }

    const fade = 1 - elapsed / 3000;
    stroke(
      red(temporaryCircle.color),
      green(temporaryCircle.color),
      blue(temporaryCircle.color),
      255 * fade
    );
    circle(
      temporaryCircle.x + temporaryCircle.velocityX * elapsed / 1000,
      temporaryCircle.y + temporaryCircle.velocityY * elapsed / 1000,
      (temporaryCircle.radius + temporaryCircle.radiusGrowth * elapsed / 1000) * 2
    );
  }

  stroke(circleColor);
  circle(mouseX, mouseY, radius * 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
