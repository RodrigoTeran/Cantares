import type { PropsIcon } from "../icons.types";

export default function ({ _className, _click }: PropsIcon) {
  return (
    <svg
      width="45"
      height="56"
      viewBox="0 0 45 56"
      fill="none"
      onClick={_click}
      className={_className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7654 12.2077C11.5958 11.0774 9.73075 10.0036 8.14826 10.1731L7.80916 10.2862L7.13095 10.8513L6.56578 11.5295C5.24704 13.583 3.00519 18.029 1.98788 21.1375C0.801013 24.0199 -0.555402 28.4847 0.23584 35.5494C0.546008 38.3187 2.02179 42.3315 3.34429 44.5356C5.03981 47.3615 7.01792 49.4526 9.27861 51.2612C10.7481 52.335 13.3479 54.3007 16.2302 54.9348C20.243 55.8176 23.5775 55.5349 26.7425 55.3304C29.3988 55.1589 33.4115 53.4654 36.746 50.3004C39.2893 47.6441 44.715 41.6533 44.9975 31.4801C45.048 29.6644 44.3193 23.5112 42.9629 20.3462C42.5108 18.6507 39.4589 13.112 37.9894 10.9078C37.0851 9.83401 35.6157 10.1166 34.9375 10.5687L34.7114 10.6818L34.881 10.0036L34.9375 9.89053L34.4288 9.94705V10.0601V10.2296L34.3723 10.5687L34.2593 10.8513L34.1462 10.9644L34.0332 11.0209V10.9078L34.2027 9.89053L34.9375 9.83401L35.1635 8.8167C35.3896 8.64715 35.8417 8.30804 35.9548 7.91242L36.0678 7.79939L36.2939 7.85591L36.5765 8.02546V7.91242H36.6895L36.746 8.13849H36.8591L37.0851 7.91242L37.1982 7.68635L37.2547 7.46029H37.3677L37.5938 7.79939L37.7633 7.5168H38.1024L38.3285 7.23422L38.4981 7.00815L38.5546 6.78208L39.2328 6.72556L39.2893 6.10387L39.8545 5.99083V5.44852L40.2501 5.31263C40.2953 5.5387 40.2501 6.66904 39.9675 7.5168C40.7022 6.44297 40.9095 5.27495 40.8718 4.69094L41.0979 4.86049L41.1544 5.25611L41.0979 5.76477L41.0413 5.99083L40.8153 6.44297L40.7022 6.66904L40.6457 6.83859V7.00815C41.6404 6.1943 41.3804 4.69094 41.0413 4.01273C38.8937 1.639 36.6895 3.33452 35.9548 4.80397C35.8417 5.14308 34.5418 5.36914 34.0332 4.5779C33.7506 4.06925 33.8636 3.89969 33.6941 3.05193C33.5245 1.52597 32.9028 1.46945 32.3942 1.13035L32.3377 1.01731L32.4507 0.84776L32.7898 0.62169L32.7333 0.452138L32.6203 0.395621H32.4507V0.169552H32.2812L32.2246 0.395621L32.1116 0.452138V0.113035L31.942 0L31.829 0.452138H31.716L31.5464 0.226069L31.4899 0.62169L31.2638 0.339104V0.734725L31.0943 0.84776L30.8682 1.07383L30.8117 1.58248L30.9247 1.69552V1.86507L30.8117 1.92159L30.7552 2.03462L30.8682 2.09114L31.0378 2.14766L31.0943 2.26069L30.8682 2.31721L30.8117 2.43024L30.8682 2.54328L30.9813 2.65631L31.2073 2.71283L31.3769 2.76935V2.99542L30.6987 4.01273C29.3988 6.55601 30.6366 6.77648 30.9247 7.06466C31.1508 7.29073 31.5464 7.79939 31.829 8.02546C31.942 8.53411 33.1289 8.87322 33.2419 9.32536L33.5245 9.66446L33.9202 9.7775L33.6941 11.1339L33.4115 11.4165L33.2419 11.5295H33.0159H32.7333L32.5072 11.6426L32.7898 11.6991L33.2419 11.8121C32.9594 12.3773 33.0724 13.1685 33.1854 13.5076C33.2419 13.8467 34.5984 16.39 35.1635 17.8595C35.4175 18.5197 37.4545 24.2762 37.2547 24.0764C37.0851 23.9068 36.2939 23.6996 35.8417 23.7373C35.1635 23.7938 35.107 23.3982 34.9375 22.946C35.2201 22.1548 35.107 20.9679 34.994 20.3462L34.881 19.8376H34.5984C33.355 21.7026 33.0724 22.2678 32.2246 23.2286L32.1116 23.5112C30.5856 23.6242 29.2857 24.4155 29.0597 24.6415C28.0989 25.6589 28.0424 26.1675 27.7033 26.6762L27.6467 27.0153L27.5337 27.1283L27.4772 27.1848L27.3642 27.3544L27.3076 27.4674H27.5337V27.6935L27.8163 27.8065L25.273 31.4801C24.4253 31.7062 24.5948 32.1018 24.5948 32.8366C22.8993 34.3625 21.9357 37.0754 21.6559 37.697C21.1473 38.8274 21.5994 39.3926 21.9385 40.0143C22.1081 41.3142 23.1254 41.9358 24.4253 41.9358C24.38 42.2976 23.9166 43.0285 23.6905 43.2923C22.0628 42.1619 20.5821 40.5418 20.0734 39.9012L20.1299 39.7952L20.2712 39.5303L20.2854 39.5038L20.2995 39.4773L20.4125 39.2654L20.5256 39.0535C20.9288 38.6054 19.9223 38.0463 19.4091 37.7613L19.3952 37.7536L19.4517 37.3014C20.6951 37.3014 21.2415 37.0754 21.3733 36.8493V36.5667L21.3168 36.2841L21.4298 36.058L21.4864 35.832V35.3798L21.4298 34.9277C22.1646 34.5886 21.5429 34.1365 21.1473 33.5713V32.3844L24.0862 30.9715C23.1254 28.3717 20.2995 28.5412 18.6605 28.8803C18.0388 28.2021 17.406 28.2711 17.0215 28.4847C14.9869 29.6151 14.3087 30.1237 13.3479 31.0845C12.9522 31.4801 12.8957 31.9323 13.3479 32.78C12.6696 34.0234 12.3871 35.3233 12.3305 35.945V37.6405L12.8392 38.2057L12.7827 38.3187H12.3305L12.2175 38.3753V39.223L12.274 38.9404L12.3871 38.7144L12.5566 38.5448H13.0653V38.9404L13.0088 39.2795L12.7262 39.7882L12.6696 40.1838L12.3305 40.5794L12.161 40.9751V41.3142L12.3871 41.4272L12.5001 41.5967V41.8793L12.3871 42.1054V43.914L12.7262 43.7444L12.8392 44.3661L13.3479 43.9705C13.2348 44.1965 14.7043 46.1181 14.9304 47.1354C10.7481 44.6487 8.6004 39.8447 8.14826 38.7144C7.86568 38.0927 6.73534 34.193 6.67882 31.9888C6.65563 31.0845 6.6223 27.75 7.13096 25.5458C7.39725 24.3919 7.86568 21.8157 9.16558 19.0463C9.49061 18.3539 10.7481 15.8814 11.4828 13.9033C11.8315 12.9644 11.7993 12.4338 11.7654 12.2077Z"
        fill="#5C1D05"
      />
      <path
        d="M15.4955 20.7984H15.8346C15.326 19.668 14.6478 17.916 14.4782 16.9552L14.5347 16.6726L17.1345 18.8203C17.9936 17.916 18.8112 17.4638 19.1126 17.3508C18.8413 18.4359 18.4721 19.197 18.3214 19.442V19.668L18.717 19.7811L18.9996 20.3462H18.4909C18.1744 21.0244 17.6432 21.5331 17.4171 21.7026L17.6997 21.9852C15.6199 23.9294 14.6101 22.4185 14.3652 21.4201L14.3087 20.8549L14.4782 20.5158H14.6478L14.9303 20.6288L15.4955 20.7984Z"
        fill="#5C1D05"
      />
      <path
        d="M19.6778 38.1492L20.1299 38.4883L20.1864 38.5448L20.2995 38.7709V38.9404L20.1864 39.1665L19.6778 38.6579L19.4517 38.4318L19.2256 38.2057L19.3387 38.0362L19.6778 38.1492Z"
        fill="white"
      />
      <path
        d="M19.2822 38.4318L19.8473 38.997L19.9604 39.4491L20.0071 39.5303V39.6186L19.9604 39.6469L19.9039 39.6752L19.7343 39.5056L19.1126 38.8274V38.3753L19.2822 38.4318Z"
        fill="white"
      />
      <path
        d="M21.9385 46.4572L21.7124 46.0616L25.3295 47.418L25.5556 48.944L23.4644 49.3396L22.8993 48.2093L22.7862 48.0397L22.8993 47.7006L22.8427 47.5311L22.6732 47.2485L22.3906 46.8529L21.9385 46.4572Z"
        fill="white"
      />
      <path
        d="M26.0643 47.3615C26.6521 46.8642 26.9497 45.5718 27.0251 44.9878L27.0816 48.4353L26.1773 48.7179L26.0643 47.3615Z"
        fill="white"
      />
      <path
        d="M30.3596 46.6268L27.7598 48.0962L27.9293 40.9185H28.2684C28.6075 40.8055 29.9639 44.7052 30.3596 46.6268Z"
        fill="white"
      />
      <path
        d="M29.2292 40.9751C29.3649 41.1107 30.4538 44.4603 30.9813 46.1181C35.0505 42.501 36.9344 37.6782 37.3677 35.719C37.0512 35.4477 36.0678 35.3233 35.8983 35.4364C35.0392 36.2954 34.0332 37.113 33.6376 37.4145L32.6768 37.5275L30.8117 38.6013C30.1335 38.8839 29.6814 39.3926 29.6814 39.9578V40.5794L29.2292 40.6925V40.9751Z"
        fill="white"
      />
    </svg>
  );
}