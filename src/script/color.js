import { reactive } from "vue";

const categoryColors = reactive({});

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const isLightColor = (hexColor) => {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}

export default {
  getCategoryColor : (category) => {
    if (!categoryColors[category]) {
      categoryColors[category] = getRandomColor();
    }
    const bgColor = categoryColors[category];
    const textColor = isLightColor(bgColor) ? "black" : "white";
    return {
      "background-color": bgColor,
      "color": textColor,
    };
  }
}