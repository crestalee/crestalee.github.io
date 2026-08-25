<template>
  <div class="weather" v-if="ready">
    <span>{{ weatherData.weather }}&nbsp;</span>
    <span>{{ weatherData.temperature }}℃</span>
    <span class="sm-hidden">
      &nbsp;{{
        weatherData.winddirection?.endsWith("风")
          ? weatherData.winddirection
          : weatherData.winddirection + "风"
      }}&nbsp;
    </span>
    <span class="sm-hidden">{{ weatherData.windpower }}&nbsp;级</span>
  </div>
  <div class="weather" v-else>
    <span>天气数据获取失败</span>
  </div>
</template>

<script setup>
import { getAdcode, getWeather, getOtherWeather } from "@/api";
import { Error } from "@icon-park/vue-next";

// 高德开发者 Key
const mainKey = import.meta.env.VITE_WEATHER_KEY;
const ready = ref(false);

// 天气数据。不存、不展示城市名。
const weatherData = reactive({
  weather: null,
  temperature: null,
  winddirection: null,
  windpower: null,
});

// 取出天气平均值
const getTemperature = (min, max) => {
  try {
    // 计算平均值并四舍五入
    const average = (Number(min) + Number(max)) / 2;
    return Math.round(average);
  } catch (error) {
    console.error("计算温度出现错误：", error);
    return "NaN";
  }
};

// 获取天气数据
const getWeatherData = async () => {
  try {
    if (!mainKey) {
      const result = await getOtherWeather();
      const data = result.result;
      weatherData.weather = data.condition.day_weather;
      weatherData.temperature = getTemperature(
        data.condition.min_degree,
        data.condition.max_degree,
      );
      weatherData.winddirection = data.condition.day_wind_direction;
      weatherData.windpower = data.condition.day_wind_power;
      ready.value = Boolean(weatherData.weather);
      return;
    }
    const adCode = await getAdcode(mainKey);
    if (adCode.infocode !== "10000") {
      throw "地区查询失败";
    }
    const result = await getWeather(mainKey, adCode.adcode);
    weatherData.weather = result.lives[0].weather;
    weatherData.temperature = result.lives[0].temperature;
    weatherData.winddirection = result.lives[0].winddirection;
    weatherData.windpower = result.lives[0].windpower;
    ready.value = Boolean(weatherData.weather);
  } catch (error) {
    console.error("天气信息获取失败:" + error);
    onError("天气信息获取失败");
  }
};

// 报错信息
const onError = (message) => {
  ElMessage({
    message,
    icon: h(Error, {
      theme: "filled",
      fill: "#efefef",
    }),
  });
  console.error(message);
};

onMounted(() => {
  // 调用获取天气
  getWeatherData();
});
</script>
