import { PopoverService } from "@/components/ui/PopoverService";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
const svg1 = (
  <svg
    className="fill-primary"
    width="80"
    height="56"
    viewBox="0 0 80 56"
    fill="none"
  >
    <path d="M65.0122 4.75757H14.9844C13.4338 4.75757 12.1719 6.01944 12.1719 7.57007V39.3813C12.1719 40.932 13.4338 42.1938 14.9844 42.1938H65.0122C66.5628 42.1938 67.8247 40.932 67.8247 39.3813V7.57007C67.8247 6.01944 66.5631 4.75757 65.0122 4.75757ZM65.3247 39.3813C65.3247 39.5535 65.1844 39.6938 65.0122 39.6938H14.9844C14.8122 39.6938 14.6719 39.5535 14.6719 39.3813V7.57007C14.6719 7.39788 14.8122 7.25757 14.9844 7.25757H65.0122C65.1844 7.25757 65.3247 7.39788 65.3247 7.57007V39.3813Z"></path>
    <path d="M76.5923 44.3812H72.5111V6.00781C72.5111 2.73375 69.8477 0.0703125 66.5736 0.0703125H13.4211C10.147 0.0703125 7.48359 2.73375 7.48359 6.00781V44.3812H3.40234C1.85172 44.3812 0.589844 45.6431 0.589844 47.1937V48.43C0.589844 52.5653 3.95422 55.93 8.08984 55.93H71.9048C76.0405 55.93 79.4048 52.5653 79.4048 48.43V47.1937C79.4048 45.6431 78.143 44.3812 76.5923 44.3812ZM9.98359 6.00781C9.98359 4.1125 11.5258 2.57031 13.4211 2.57031H66.5739C68.4692 2.57031 70.0114 4.1125 70.0114 6.00781V44.3812C68.5861 44.3812 11.3214 44.3812 9.98359 44.3812V6.00781ZM47.0692 46.8812C47.0692 48.2156 46.127 48.9075 45.1942 48.9075H34.8005C33.8764 48.9075 32.9255 48.2256 32.9255 46.8812H47.0692ZM76.9048 48.4297C76.9048 51.1866 74.6617 53.4297 71.9048 53.4297H8.08984C5.33297 53.4297 3.08984 51.1866 3.08984 48.4297V47.1934C3.08984 47.0213 3.23016 46.8809 3.40234 46.8809H8.73359H30.4255C30.4255 49.6409 32.5323 51.4072 34.8005 51.4072H45.1942C47.4573 51.4072 49.5692 49.6475 49.5692 46.8809H71.2614C76.8714 46.8809 76.9052 46.7622 76.9052 47.1934V48.4297H76.9048Z"></path>
    <path d="M50.1562 13.8362H48.2291V11.2646C48.2291 10.5743 47.6694 10.0146 46.9791 10.0146C46.2887 10.0146 45.7291 10.5743 45.7291 11.2646V13.8362H34.4791V11.2646C34.4791 10.5743 33.9194 10.0146 33.2291 10.0146C32.5387 10.0146 31.9791 10.5743 31.9791 11.2646V13.8362H29.8438C26.5697 13.8362 23.9062 16.4997 23.9062 19.7737V30.9987C23.9062 34.2728 26.5697 36.9362 29.8438 36.9362H50.1562C53.4303 36.9362 56.0938 34.2728 56.0938 30.9987V19.7737C56.0938 16.5 53.4303 13.8362 50.1562 13.8362ZM53.5938 30.9987C53.5938 32.894 52.0516 34.4362 50.1562 34.4362H29.8438C27.9484 34.4362 26.4062 32.894 26.4062 30.9987V19.7737C26.4062 17.8784 27.9484 16.3362 29.8438 16.3362H31.9791V18.729C31.9791 19.4193 32.5387 19.979 33.2291 19.979C33.9194 19.979 34.4791 19.4193 34.4791 18.729V16.3362H45.7291V18.729C45.7291 19.4193 46.2887 19.979 46.9791 19.979C47.6694 19.979 48.2291 19.4193 48.2291 18.729V16.3362H50.1562C52.0516 16.3362 53.5938 17.8784 53.5938 19.7737V30.9987Z"></path>
    <path d="M44.4628 20.7975L38.1719 27.3103L35.5294 24.59C35.0484 24.095 34.2572 24.0831 33.7619 24.5644C33.2669 25.0453 33.255 25.8369 33.7362 26.3319L37.2778 29.9778C37.7694 30.4837 38.5828 30.4834 39.0734 29.9753L46.2609 22.5344C46.7406 22.0378 46.7269 21.2466 46.2303 20.7669C45.7337 20.2875 44.9425 20.3009 44.4628 20.7975Z"></path>
    <path d="M21.3125 9.64062H17.875C17.1847 9.64062 16.625 10.2003 16.625 10.8906C16.625 11.5809 17.1847 12.1406 17.875 12.1406H21.3125C22.0028 12.1406 22.5625 11.5809 22.5625 10.8906C22.5625 10.2003 22.0028 9.64062 21.3125 9.64062Z"></path>
    <path d="M26 12.1406H27.2625C27.9528 12.1406 28.5125 11.5809 28.5125 10.8906C28.5125 10.2003 27.9528 9.64062 27.2625 9.64062H26C25.3097 9.64062 24.75 10.2003 24.75 10.8906C24.75 11.5809 25.3097 12.1406 26 12.1406Z"></path>
  </svg>
);
const svg2 = (
  <svg
    className="fill-primary"
    width="58"
    height="80"
    viewBox="0 0 58 80"
    fill="none"
  >
    <path d="M9.3125 20.5059V13.1627H13.9969V20.5059C13.9969 22.1574 16.4969 22.1596 16.4969 20.5059V13.1627H20.8719V20.5059C20.8719 22.1574 23.3719 22.1596 23.3719 20.5059V13.1627H27.7469V20.5059C27.7469 22.1574 30.2469 22.1596 30.2469 20.5059V13.1627H34.6219V20.5059C34.6219 22.1574 37.1219 22.1596 37.1219 20.5059V13.1627H41.4969V20.5059C41.4969 22.1574 43.9969 22.1596 43.9969 20.5059V13.1627H48.6875V20.5059C48.6875 22.1574 51.1875 22.1596 51.1875 20.5059C51.1875 17.0309 51.1844 9.76336 51.1844 6.28711C51.1844 3.01305 48.5209 0.349609 45.2469 0.349609H12.7531C9.47906 0.349609 6.81562 3.01305 6.81562 6.28711C6.81562 7.8093 6.8125 12.5193 6.8125 20.5059C6.8125 22.1574 9.3125 22.1596 9.3125 20.5059ZM9.31563 6.28711C9.31563 4.3918 10.8578 2.84961 12.7531 2.84961H45.2469C47.1422 2.84961 48.6844 4.3918 48.6844 6.28711V10.6627C44.2984 10.6627 14.4066 10.6627 9.31594 10.6627V6.28711H9.31563Z"></path>
    <path d="M37.7434 5.66211H31.4934C29.8418 5.66211 29.8396 8.16211 31.4934 8.16211H37.7434C39.395 8.16211 39.3971 5.66211 37.7434 5.66211Z"></path>
    <path d="M43.6809 5.66211H42.4309C40.7793 5.66211 40.7771 8.16211 42.4309 8.16211H43.6809C45.3325 8.16211 45.3346 5.66211 43.6809 5.66211Z"></path>
    <path d="M37.4156 52.8942C37.4156 57.4548 30.5009 57.773 30.2975 52.8423C30.9812 52.4852 31.0419 52.2967 33.1962 49.6086C34.6722 47.7674 33.3597 45.0374 31.0019 45.0374H26.9919C24.6322 45.0374 23.3228 47.7689 24.7975 49.6086C26.9616 52.3089 27.0169 52.4873 27.6962 52.8423C27.4922 57.787 20.5781 57.4417 20.5781 52.8942C20.5781 51.2427 18.0781 51.2405 18.0781 52.8942C18.0781 58.7048 25.5203 61.1786 28.9969 56.4899C32.4731 61.1783 39.9156 58.7045 39.9156 52.8942C39.9156 51.2427 37.4156 51.2405 37.4156 52.8942ZM29.2403 50.5464C29.2403 50.5467 29.2403 50.5467 29.2403 50.5464C29.1144 50.7033 28.8784 50.7033 28.7525 50.5464L26.7475 48.0452C26.5819 47.8386 26.7266 47.5374 26.9912 47.5374H31.0012C31.2659 47.5374 31.4106 47.8389 31.245 48.0452L29.2403 50.5464Z"></path>
    <path d="M21.7853 40.8463C23.0934 41.8591 24.6181 39.8785 23.3162 38.8701C19.4275 35.8573 15.7706 37.6123 14.3806 38.961C13.1956 40.1107 14.9337 41.9073 16.1212 40.7554C16.2222 40.6579 18.6203 38.3938 21.7853 40.8463Z"></path>
    <path d="M43.5155 38.8696C39.6268 35.8568 35.9699 37.6118 34.5799 38.9605C33.3946 40.1102 35.1333 41.9068 36.3205 40.7549C36.4212 40.6574 38.8196 38.3936 41.9846 40.8458C43.2777 41.8474 44.8408 39.8961 43.5155 38.8696Z"></path>
    <path d="M56.4328 52.9911L50.4378 52.0064C50.9247 50.1764 51.2035 48.1811 51.1822 46.0402L56.4963 44.8836C58.1082 44.5324 57.5832 42.093 55.9647 42.4408L51.0132 43.5186C50.8582 42.2736 53.6894 34.4364 56.2016 24.9721C56.7522 22.8871 54.85 20.9802 52.7597 21.5321C41.9694 24.3961 44.666 23.5942 37.0488 25.6121C31.831 23.578 26.0647 23.6074 20.93 25.6186C13.3285 23.6046 16.0194 24.3939 5.23659 21.5314C3.1519 20.9811 1.2444 22.8824 1.79658 24.9733C4.28252 34.3374 7.13596 42.342 6.98846 43.5192L2.03283 42.4405C0.415647 42.092 -0.112166 44.532 1.50127 44.8833L6.81346 46.0395C6.7869 47.9927 7.03252 50.0264 7.55877 52.0061L1.5644 52.9908C0.0559595 53.2389 0.24221 55.4745 1.76565 55.4745C1.93408 55.4745 8.1894 54.4364 8.35565 54.4089C9.31096 56.8255 10.691 59.0877 12.4269 61.0408V67.4402C12.4269 69.1139 13.3985 70.6617 14.901 71.3824C17.3447 72.5574 20.1878 73.4236 23.1847 73.9139C23.2294 77.0839 25.8182 79.6499 28.9988 79.6499C32.1744 79.6499 34.76 77.0914 34.8122 73.9277C37.8013 73.4417 40.5835 72.5886 43.0956 71.3827C44.5972 70.6624 45.5675 69.1149 45.5675 67.4408L45.5703 61.042C47.3285 59.0661 48.6922 56.8389 49.6457 54.4095C49.8116 54.4367 56.0635 55.4745 56.2319 55.4745C57.7538 55.4749 57.9419 53.2392 56.4328 52.9911ZM8.28846 38.2999C6.6919 32.6458 6.6369 33.4649 4.21315 24.3333C4.15096 24.0977 4.36596 23.8864 4.59659 23.9483C13.786 26.3874 13.1794 26.1727 17.5016 27.3011C13.2735 29.8496 10.0453 33.7095 8.28846 38.2999ZM23.69 71.4624C20.8897 71.0136 18.2425 70.2158 15.9831 69.1292C15.3416 68.8214 14.9269 68.1586 14.9269 67.4408V63.4352C18.3706 66.2649 22.5528 67.9814 26.9803 68.382L26.9753 68.3839C25.4885 68.938 24.3138 70.0714 23.69 71.4624ZM28.9985 77.1502C27.1688 77.1502 25.6803 75.6617 25.6803 73.832C25.6803 71.9945 27.1897 70.5136 28.9985 70.5136C30.8113 70.5136 32.3166 71.9983 32.3166 73.832C32.3166 75.6617 30.8281 77.1502 28.9985 77.1502ZM43.0672 67.4405C43.0672 68.1592 42.6538 68.8221 42.0138 69.1292C39.69 70.2445 37.1028 71.0302 34.3132 71.4749C33.6969 70.0908 32.5253 68.9449 31.0197 68.3814C35.4469 67.9802 39.6278 66.2639 43.0688 63.4361L43.0672 67.4405ZM47.9591 51.5992L42.3628 50.6802C40.7341 50.4117 40.3247 52.8786 41.9575 53.1474L47.1166 53.9949C40.5097 69.5577 17.8347 70.2639 10.8831 53.9945L16.0397 53.1477C17.6719 52.8792 17.2628 50.4105 15.6344 50.6805L10.0381 51.5995C9.58377 49.9724 9.3419 48.288 9.31658 46.5849L15.5716 47.9464C17.2091 48.3008 17.6997 45.8511 16.1031 45.5036L9.4419 44.0536C10.2775 36.6899 15.2022 30.6239 21.6275 28.027C21.6366 28.0233 21.646 28.0205 21.655 28.0167V32.5896C21.655 34.2411 24.155 34.2433 24.155 32.5896V27.202C25.3278 26.9049 26.5285 26.7192 27.7488 26.6433V36.2874C27.7488 37.9389 30.2488 37.9411 30.2488 36.2874V26.6417C31.4675 26.718 32.6691 26.9058 33.8425 27.2036V32.5892C33.8425 34.2408 36.3425 34.243 36.3425 32.5892V28.023C36.5344 28.1005 36.7297 28.1746 36.916 28.2574C36.9335 28.2652 36.951 28.2724 36.9688 28.2796C43.0832 30.9908 47.7494 36.8902 48.5578 44.0527L41.8944 45.503C40.2972 45.8508 40.7897 48.2999 42.426 47.9458L48.6803 46.5845C48.655 48.2877 48.4141 49.9702 47.9591 51.5992ZM40.4625 27.2992C44.8072 26.1674 44.1966 26.3914 53.3991 23.9489C53.6353 23.8874 53.8453 24.1014 53.7841 24.3324C51.3553 33.482 51.305 32.6211 49.6997 38.3011C47.9291 33.7396 44.65 29.8424 40.4625 27.2992Z"></path>
  </svg>
);
const svg3 = (
  <svg
    className="fill-primary"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
  >
    <path d="M33.8617 21.4363C32.918 21.4363 32.1523 22.2019 32.1523 23.1457C32.1523 24.0863 32.918 24.8519 33.8617 24.8519C34.8023 24.8519 35.568 24.0863 35.568 23.1457C35.568 22.2019 34.8023 21.4363 33.8617 21.4363Z"></path>
    <path d="M45.2719 24.8519C46.2156 24.8519 46.9781 24.0863 46.9781 23.1457C46.9781 22.2019 46.2156 21.4363 45.2719 21.4363C44.3281 21.4363 43.5625 22.2019 43.5625 23.1457C43.5625 24.0863 44.3281 24.8519 45.2719 24.8519Z"></path>
    <path d="M39.7078 43.8456C42.885 47.7681 49.2672 45.52 49.2672 40.4612C49.2672 38.8097 46.7672 38.8072 46.7672 40.4612C46.7672 43.6606 42.2644 44.4581 41.1797 41.4487C44.1038 41.0294 46.5422 38.6709 46.5422 34.7675C46.5422 32.6956 44.8578 31.0112 42.7859 31.0112H37.2391C35.1703 31.0112 33.4859 32.6956 33.4859 34.7675C33.4859 38.3894 35.5584 40.6837 38.2766 41.3394C37.2341 44.564 32.6484 43.655 32.6484 40.4612C32.6484 38.8109 30.1484 38.8069 30.1484 40.4612C30.1484 45.4584 36.4909 47.8169 39.7078 43.8456ZM35.9859 34.7675C35.9859 34.0737 36.5484 33.5112 37.2391 33.5112H42.7859C43.4797 33.5112 44.0422 34.0737 44.0422 34.7675C44.0422 40.4906 35.9859 40.4731 35.9859 34.7675Z"></path>
    <path d="M11.1111 32.2208C11.1111 29.1597 8.61817 26.6667 5.554 26.6667C2.48983 26.6667 0 29.1597 0 32.2208C0 35.2849 2.48983 37.7779 5.554 37.7779C8.61817 37.7779 11.1111 35.2849 11.1111 32.2208ZM2.48362 32.2208C2.48362 30.5288 3.86203 29.1504 5.554 29.1504C7.24908 29.1504 8.62749 30.5288 8.62749 32.2208C8.62749 33.9158 7.24908 35.2942 5.554 35.2942C3.86203 35.2942 2.48362 33.9158 2.48362 32.2208Z"></path>
    <path d="M9.44286 18.8889C14.6515 18.8889 18.8889 14.6547 18.8889 9.44603C18.8889 4.23738 14.6515 0 9.44286 0C4.23738 0 0 4.23738 0 9.44603C0 14.6547 4.23738 18.8889 9.44286 18.8889ZM9.44286 2.53926C13.2517 2.53926 16.3496 5.63715 16.3496 9.44603C16.3496 13.2517 13.2517 16.3496 9.44286 16.3496C5.63715 16.3496 2.53926 13.2517 2.53926 9.44603C2.53926 5.63715 5.63715 2.53926 9.44286 2.53926Z"></path>
    <path d="M12.0044 11.3875C11.9116 11.4584 11.3872 12.009 11.3353 12.0734C10.3634 13.2818 12.0337 14.7953 13.1487 13.7828C13.355 13.5953 13.5519 13.389 13.7269 13.1734C14.6597 12.0347 13.1744 10.4947 12.0044 11.3875Z"></path>
    <path d="M9.42723 6.62378C10.6366 6.62378 11.7429 7.34565 12.2272 8.46753C12.8829 9.99034 15.1844 9.00065 14.521 7.47065C13.6397 5.4394 11.6397 4.12378 9.42723 4.12378C7.77535 4.12378 7.77316 6.62378 9.42723 6.62378Z"></path>
    <path d="M68.0847 59.5875C68.0896 59.428 68.0878 55.7314 68.0878 55.5716H70.8323C72.2744 55.5716 73.4498 54.3829 73.4498 52.9206V50.3544C73.4498 48.8921 72.2744 47.7003 70.8323 47.7003H68.9902C68.2335 45.2914 66.0037 43.5429 63.3801 43.5429H61.5194C58.8957 43.5429 56.6659 45.2914 55.9092 47.7003H54.8424C57.734 44.2244 56.5022 37.2499 54.0733 33.3476V30.3915C57.2105 37.2751 57.1026 37.0961 57.3203 37.4106C58.7608 39.4861 61.8819 39.2456 62.9955 36.9735C63.1491 36.6515 62.8854 37.493 66.8845 23.8064C67.5655 22.0132 66.6137 20.0166 64.847 19.4194L50.6154 13.5198C56.6235 10.4738 54.4749 1.24269 47.7561 1.24269C46.6862 1.24269 45.6349 1.51629 44.7014 2.03203C42.1913 -0.678757 37.924 -0.675927 35.4163 2.03203C34.4829 1.51629 33.4315 1.24269 32.3616 1.24269C25.9213 1.24269 23.5238 9.8845 29.0619 13.2746L15.2708 18.9917C13.5037 19.5889 12.5522 21.5855 13.2333 23.3787C17.2149 37.0056 16.9678 36.2345 17.1253 36.5489C18.2321 38.8135 21.3551 39.061 22.7974 36.9829C23.0114 36.6684 22.9314 36.7911 25.4397 31.2877V34.4105C23.4915 38.1433 22.581 44.4615 25.2753 47.7003H24.2085C23.4518 45.2914 21.222 43.5429 18.5984 43.5429H16.7376C14.114 43.5429 11.8842 45.2914 11.1275 47.7003H9.2854C7.84333 47.7003 6.66797 48.8921 6.66797 50.3544V52.9206C6.66797 54.3829 7.84333 55.5716 9.2854 55.5716H12.03V59.295C12.03 67.0091 17.1253 73.5345 24.0845 75.5974L22.3478 77.3585C20.9355 78.7982 23.0756 80.9633 24.4907 79.5284L27.7315 76.2421C28.5561 76.295 51.4922 76.2994 52.3862 76.2421L55.627 79.5284C57.0427 80.964 59.1817 78.7976 57.77 77.3585L56.0333 75.5974C57.6366 75.1226 59.1407 74.4087 60.5053 73.4999C62.0807 76.3553 65.0982 78.2894 68.5498 78.2894C73.6389 78.2894 77.7791 74.0911 77.7791 68.9305C77.7791 63.4885 73.2032 59.2764 68.0847 59.5875ZM69.2724 50.2161H70.8323C70.9068 50.2161 70.9688 50.279 70.9688 50.3544V52.9206C70.9688 52.996 70.9068 53.0558 70.8323 53.0558H68.8538C69.3354 52.0334 69.2724 51.2683 69.2724 50.2161ZM9.2854 53.0558C9.21097 53.0558 9.14895 52.996 9.14895 52.9206V50.3544C9.14895 50.279 9.21097 50.2161 9.2854 50.2161H10.8453C10.8453 51.2359 10.7765 52.0218 11.264 53.0558H9.2854ZM58.1545 48.9582C58.4098 47.326 59.8183 46.0587 61.5194 46.0587H63.3801C65.0811 46.0587 66.4897 47.3257 66.7449 48.9582C66.802 49.294 66.7914 49.2984 66.7914 51.1689C66.7914 51.8765 66.4069 52.4929 65.8394 52.8168C65.8394 51.3737 65.8394 51.0139 65.8394 49.5588C65.8394 47.8871 63.3584 47.9066 63.3584 49.5588V53.0558H61.5411C61.5411 51.813 61.5411 50.8114 61.5411 49.5588C61.5411 47.8783 59.0601 47.9135 59.0601 49.5588V52.8168C58.4926 52.4929 58.108 51.8765 58.108 51.1689C58.108 49.3497 58.0944 49.3107 58.1545 48.9582ZM64.0407 21.7969C64.5009 21.9443 64.7468 22.4651 64.5617 22.9227C64.5291 23.0019 60.7837 35.8297 60.772 35.8539C60.4963 36.4175 59.7073 36.4775 59.3516 35.964C59.342 35.9543 50.3016 16.1174 50.296 16.1048C50.3444 16.125 63.9904 21.7814 64.0407 21.7969ZM37.6306 18.6835C35.2303 16.7967 32.9323 17.2149 31.4902 18.0137L33.2548 14.1425C33.4936 14.1111 33.7324 14.0639 33.965 14.001C36.5452 18.9911 43.5729 18.9905 46.1528 14.001C46.3202 14.045 46.4908 14.0828 46.6645 14.1142C46.6989 14.2262 48.5758 18.3285 48.6245 18.4351C45.6318 16.3375 42.8562 17.7118 41.777 18.7747C40.6205 19.9103 42.2942 21.716 43.495 20.5893C43.7865 20.3157 45.3465 19.0295 47.4398 20.671C48.1013 21.195 49.0955 20.91 49.375 20.0798L51.5923 24.9479V30.2877C45.3462 24.2756 34.071 24.3054 27.9207 30.9009V25.8442L30.3675 20.4761C30.7059 20.9566 31.5832 21.1393 32.1693 20.5893C32.4609 20.3157 34.0208 19.0295 36.111 20.671C37.3906 21.6843 38.9508 19.7163 37.6306 18.6835ZM51.5923 34.1086C54.54 38.3323 54.1884 43.4441 53.726 44.719C53.0995 46.4581 51.4497 47.7003 49.5207 47.7003H30.597C28.6681 47.7003 27.0182 46.4581 26.3918 44.719C25.8258 43.1583 25.8394 38.6556 27.9207 35.0583C33.0154 26.2514 46.1884 26.3586 51.5923 34.1086ZM32.3616 3.7585C33.2827 3.7585 34.1758 4.09185 34.8829 4.69564C35.4777 5.20383 36.3492 5.03244 36.7375 4.40003C38.2775 1.88642 41.843 1.89083 43.3803 4.40003C43.7738 5.04125 44.6468 5.19817 45.2348 4.69564C45.9388 4.09185 46.8351 3.7585 47.7561 3.7585C52.9274 3.7585 52.9305 11.6927 47.7561 11.6927C47.1632 11.6927 46.5736 11.5588 46.0163 11.2745C45.3303 10.9267 44.489 11.2899 44.2734 12.0449C43.0128 16.3052 37.0932 16.2649 35.8443 12.0449C35.6285 11.2883 34.7855 10.9276 34.1014 11.2745C33.5556 11.5512 32.9695 11.6927 32.3616 11.6927C27.1463 11.6927 27.2167 3.7585 32.3616 3.7585ZM20.7661 35.5363C20.4073 36.0495 19.6215 35.9882 19.3458 35.4294C19.3169 35.3413 15.584 22.5626 15.5561 22.495C15.3706 22.0371 15.6172 21.5167 16.0771 21.3692C16.1202 21.356 29.7799 15.6944 29.8217 15.6771C29.7541 15.8253 20.8381 35.3901 20.7661 35.5363ZM24.4907 50.2161H55.627C55.627 51.2359 55.5582 52.0218 56.0457 53.0558H24.072C24.5537 52.0334 24.4907 51.2683 24.4907 50.2161ZM14.2784 52.8168C13.7109 52.4929 13.3263 51.8765 13.3263 51.1689C13.3263 49.3497 13.313 49.3107 13.3728 48.9582C13.6281 47.326 15.0366 46.0587 16.7376 46.0587H18.5984C20.3069 46.0587 21.7105 47.3418 21.9632 48.9582C22.1958 50.3258 22.247 52.1378 21.0577 52.8168C21.0577 51.3737 21.0577 51.0139 21.0577 49.5588C21.0577 47.8779 18.5767 47.9135 18.5767 49.5588V53.0558H16.7594C16.7594 51.813 16.7594 50.8114 16.7594 49.5588C16.7594 47.8845 14.2784 47.9084 14.2784 49.5588V52.8168ZM59.578 71.1004C57.1587 72.8376 54.296 73.7609 51.3411 73.7609H28.7766C20.9572 73.7609 14.511 67.3163 14.511 59.295V55.5716H65.5851C65.5851 59.5903 65.6139 59.5903 65.5851 60.0718C61.0818 61.6212 58.4569 66.4273 59.578 71.1004ZM68.5498 75.7736C64.8398 75.7736 61.8047 72.709 61.8047 68.9305C61.8047 65.1527 64.8411 62.0907 68.5498 62.0907C72.2713 62.0907 75.2981 65.16 75.2981 68.9305C75.2981 72.7043 72.2713 75.7736 68.5498 75.7736Z"></path>
    <path d="M71.2687 70.4802C71.1769 70.5533 70.6316 71.1355 70.5872 71.1961C69.6937 72.4114 71.3491 73.8589 72.4353 72.8586C72.6416 72.6711 72.8384 72.468 73.0134 72.2492C73.9503 71.1045 72.4388 69.5464 71.2687 70.4802Z"></path>
    <path d="M68.7052 63.2019C67.0502 63.2019 67.0421 65.7019 68.7052 65.7019C69.8849 65.7019 71.0102 66.3966 71.5052 67.5425C72.1652 69.0756 74.4596 68.0653 73.799 66.5488C72.9177 64.5144 70.9177 63.2019 68.7052 63.2019Z"></path>
    <path d="M62.983 10.913C65.9379 11.7223 68.9955 9.97891 69.8046 7.0184C70.6112 4.06039 68.8701 1.00648 65.9097 0.197458C62.9601 -0.608767 59.8991 1.12564 59.0881 4.09204C58.2818 7.04106 60.0161 10.1021 62.983 10.913ZM61.484 4.74682C61.9328 3.10117 63.6397 2.14754 65.2548 2.59317C66.9031 3.04562 67.8574 4.73751 67.4087 6.36362C66.967 7.995 65.279 8.96787 63.6379 8.51727C61.984 8.06327 61.0384 6.36983 61.484 4.74682Z"></path>
    <path d="M64.9922 38.0833C64.9922 41.1677 67.5016 43.6771 70.5828 43.6771C73.6672 43.6771 76.1766 41.1677 76.1766 38.0833C76.1766 35.0021 73.6672 32.4927 70.5828 32.4927C67.5016 32.4927 64.9922 35.0021 64.9922 38.0833ZM70.5828 34.9927C72.2891 34.9927 73.6766 36.3802 73.6766 38.0833C73.6766 39.7896 72.2891 41.1771 70.5828 41.1771C68.8797 41.1771 67.4922 39.7896 67.4922 38.0833C67.4922 36.3802 68.8797 34.9927 70.5828 34.9927Z"></path>
    <path d="M76.3158 14.6228C73.6492 13.8939 70.9069 15.4636 70.1786 18.1287C69.4484 20.8002 71.0237 23.5446 73.6844 24.2662C76.3541 24.9972 79.0984 23.4099 79.8216 20.7602C80.5504 18.0935 78.9805 15.3511 76.3158 14.6228ZM77.6678 20.1736C77.2656 21.643 75.746 22.5118 74.2738 22.1123C72.8017 21.7101 71.9329 20.1876 72.3352 18.7182C72.7341 17.2443 74.2562 16.373 75.7292 16.7794C77.1983 17.1769 78.0673 18.6964 77.6678 20.1736Z"></path>
  </svg>
);
const svg4 = (
  <svg
    className="fill-primary"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
  >
    <path d="M34.7833 54.2231C34.093 54.2231 33.5333 54.7828 33.5333 55.4731C33.5333 57.1691 32.1536 58.5488 30.4573 58.5488C28.7698 58.5488 27.3967 57.1828 27.3827 55.4985C27.6758 55.336 27.9373 55.1147 28.1527 54.8466L29.9589 52.5935C30.6027 51.7903 30.7277 50.7122 30.2808 49.7841C29.8339 48.8528 28.9152 48.2778 27.887 48.2778H24.2777C23.2464 48.2778 22.3277 48.8528 21.8808 49.7841C21.437 50.7122 21.5589 51.7903 22.2027 52.5935L24.0089 54.8466C24.2242 55.115 24.4861 55.3363 24.7792 55.4988C24.7652 57.1828 23.392 58.5488 21.7048 58.5488C20.0086 58.5488 18.6289 57.1691 18.6289 55.4731C18.6289 54.7828 18.0692 54.2231 17.3789 54.2231C16.6886 54.2231 16.1289 54.7828 16.1289 55.4731C16.1289 58.5475 18.6302 61.0488 21.7048 61.0488C23.4792 61.0488 25.0589 60.2128 26.0808 58.9172C29.3502 63.0622 36.033 60.7466 36.033 55.4731C36.0333 54.7828 35.4736 54.2231 34.7833 54.2231ZM26.203 53.281C26.1414 53.361 26.0208 53.361 25.9592 53.281L24.1561 51.031C24.0739 50.935 24.1377 50.7778 24.278 50.7778H27.8873C28.0167 50.7778 28.0905 50.9169 28.0092 51.031L26.203 53.281Z"></path>
    <path d="M19.5114 44.7285C19.7392 44.9047 20.0089 44.9903 20.2761 44.9903C20.6492 44.9903 21.0189 44.8238 21.2651 44.506C21.688 43.9603 21.5883 43.175 21.0426 42.7522C17.4755 39.9888 14.1151 41.6031 12.8367 42.8431C12.3411 43.3238 12.3292 44.1153 12.8098 44.6106C13.2908 45.1063 14.0817 45.1178 14.5773 44.6375C14.6648 44.5531 16.7476 42.5872 19.5114 44.7285Z"></path>
    <path d="M32.7573 44.6375C32.8445 44.5528 34.9273 42.5869 37.6911 44.7285C37.9189 44.9047 38.1886 44.9903 38.4558 44.9903C39.6411 44.9903 40.1639 43.4819 39.2223 42.7522C35.6551 39.9888 32.2948 41.6031 31.0164 42.8431C30.5208 43.3238 30.5089 44.1153 30.9895 44.6106C31.4705 45.1063 32.2617 45.1178 32.7573 44.6375Z"></path>
    <path d="M51.8125 46.8985C51.6656 46.2238 50.9984 45.7966 50.3253 45.9428L46.0012 46.8841C45.9972 46.8147 45.9881 46.7832 45.9787 46.7244C48.4853 37.3085 48.0553 40.2831 50.6856 30.3753C51.2062 28.4056 49.409 26.606 47.4356 27.1266C37.7697 29.6913 40.1487 28.985 33.3441 30.7869C29.0791 29.1185 24.1044 28.951 19.5481 30.5216C19.519 30.5216 18.8344 30.7819 18.8075 30.7922C12.0112 28.9919 14.4165 29.6972 4.72874 27.126C2.76124 26.6053 0.958423 28.4013 1.47999 30.3763C2.81999 35.425 3.37499 37.1663 3.91217 38.85C4.42217 40.4497 4.94967 42.105 6.1828 46.7372C6.18124 46.7463 6.16499 46.8725 6.16374 46.8838L1.8403 45.9428C1.16749 45.7969 0.499986 46.2238 0.353111 46.8985C0.206236 47.5732 0.633736 48.2388 1.30874 48.3857L5.98905 49.4044C5.98905 51.4172 6.2228 52.9319 6.63311 54.5728L1.37217 55.4369C-0.136264 55.685 0.0499856 57.9207 1.57342 57.9207C1.74155 57.9207 7.25436 57.0044 7.4203 56.9772C8.30249 59.0947 9.38655 60.9813 11.0456 62.856V68.5653C11.0456 70.1185 11.9456 71.556 13.3394 72.2278C15.5862 73.306 18.1019 74.0622 20.7237 74.4903C20.8144 77.3685 23.1831 79.6778 26.0831 79.6778C28.9831 79.6778 31.3519 77.3685 31.4425 74.4903C34.0644 74.0622 36.58 73.306 38.8269 72.2278C40.2206 71.556 41.1206 70.1185 41.1206 68.5653V62.8591C42.6769 61.1028 43.8956 59.131 44.7519 56.9782C44.9181 57.0053 50.425 57.9207 50.5934 57.9207C52.1153 57.9207 52.3037 55.685 50.7947 55.4369L45.5362 54.5732C46.1015 52.4538 46.2225 50.0535 46.1744 49.405L50.8581 48.3857C51.5315 48.2388 51.959 47.5728 51.8125 46.8985ZM7.46342 41.95C6.95249 40.1563 6.61967 39.1122 6.29405 38.0907C5.76624 36.4357 5.22061 34.7244 3.89655 29.7366C3.86467 29.6175 3.97467 29.511 4.08842 29.5428C12.1612 31.6853 11.8262 31.5507 15.4206 32.4869C11.7315 34.7925 9.00998 38.1125 7.46342 41.95C7.46342 41.95 7.46374 41.9497 7.46342 41.95ZM21.2231 72.0528C18.8075 71.6591 16.4919 70.9653 14.4231 69.9716C13.8887 69.7153 13.545 69.1653 13.545 68.5653V65.2247C16.4919 67.5872 20.02 69.056 23.7575 69.4872C22.645 70.0247 21.745 70.9341 21.2231 72.0528ZM28.9012 74.8091C28.67 76.1528 27.4919 77.1778 26.0825 77.1778C24.4994 77.1778 23.22 75.8888 23.22 74.3185C23.22 72.7382 24.5134 71.456 26.0825 71.456C27.8481 71.456 29.2097 73.061 28.9012 74.8091ZM38.62 68.5653C38.62 69.1653 38.2762 69.7153 37.745 69.9716C35.6731 70.9653 33.3575 71.6622 30.9419 72.0528C30.42 70.9341 29.52 70.0247 28.4075 69.4872C32.145 69.056 35.6731 67.5872 38.62 65.2278V68.5653ZM43.0603 54.1666L38.1312 53.3569C37.4509 53.245 36.8072 53.7063 36.695 54.3878C36.5834 55.0691 37.0447 55.7119 37.7259 55.8241L42.2144 56.5613C36.2769 70.1328 16.2612 71.0169 9.95842 56.5603L14.4403 55.8241C15.1215 55.7122 15.5828 55.0691 15.4712 54.3878C15.3594 53.7066 14.7165 53.2469 14.035 53.3569L9.11092 54.1657C9.11092 54.1657 9.11092 54.1653 9.11092 54.165C8.73592 52.7966 8.52655 51.3813 8.49842 49.9503L13.9719 51.1416C14.0612 51.161 14.1506 51.1703 14.2387 51.1703C14.814 51.1703 15.3315 50.771 15.4587 50.186C15.6056 49.5113 15.1781 48.8456 14.5031 48.6988L8.61686 47.4175C9.33311 41.3788 13.209 36.1628 18.5512 33.6244C18.5512 33.6244 18.5515 33.6244 18.5515 33.6241V37.4641C18.5515 38.1544 19.1112 38.7141 19.8015 38.7141C20.4919 38.7141 21.0515 38.1544 21.0515 37.4641V32.6619C22.7444 32.1556 24.4969 31.9744 24.8831 31.9744V40.5266C24.8831 41.2169 25.4428 41.7766 26.1331 41.7766C26.8234 41.7766 27.3831 41.2169 27.3831 40.5266V31.981C29.0769 32.106 30.8803 32.5453 31.114 32.6622V37.4644C31.114 38.1547 31.6737 38.7144 32.364 38.7144C33.0544 38.7144 33.614 38.1547 33.614 37.4644V33.6219C39.1825 36.2666 42.9006 41.6641 43.5509 47.4172L37.6625 48.6988C36.9878 48.8456 36.5603 49.5116 36.7069 50.186C36.834 50.771 37.3516 51.1703 37.9269 51.1703C38.015 51.1703 38.1044 51.161 38.1937 51.1416L43.6694 49.9497C43.6347 51.561 43.4156 52.745 43.0603 54.1666ZM44.6956 41.9478C42.9944 37.865 40.1628 34.6432 36.7294 32.4838C36.7287 32.4835 36.7281 32.4828 36.7272 32.4825C40.3403 31.5435 39.9875 31.6888 48.075 29.5428C48.1962 29.5119 48.2997 29.6213 48.2687 29.735C46.1362 37.7678 46.0441 37.2185 44.6956 41.9478Z"></path>
    <path d="M79.6625 13.5778C79.3022 4.22529 69.4822 -2.47033 60.4156 1.47779C53.0394 4.68592 49.7466 4.54061 34.1406 6.13404L22.7375 3.85592C21.0191 3.50592 19.375 4.82186 19.375 6.61217V21.6278C19.375 23.4331 21.0344 24.7331 22.7375 24.3872L34.1531 22.109L49.4906 23.6622C54.6316 24.184 58.4944 25.9781 58.8069 26.0562L58.2294 28.4297C55.4903 27.6331 52.9112 29.23 52.2075 31.7015C51.4984 34.1928 52.9359 36.8384 55.4119 37.599L55.9578 37.7669L54.3228 44.4878C53.0878 49.55 58.6213 53.6219 63.0925 50.9015C64.4353 50.0847 65.3784 48.7934 65.7487 47.2672L70.6694 27.0475C75.9172 25.139 79.9019 19.8844 79.6625 13.5778ZM32.8219 19.8247L22.25 21.934C22.0491 21.9753 21.875 21.8212 21.875 21.6278V6.61217C21.875 6.43498 22.0169 6.27686 22.25 6.30592L32.8219 8.41842V19.8247ZM57.4619 30.81L57.6378 30.8612L56.55 35.3334C52.9134 34.2159 54.7406 30.0169 57.4619 30.81ZM63.3194 46.6772C63.1066 47.5547 62.5647 48.2965 61.7931 48.7659C59.2309 50.3244 56.0403 47.9972 56.7519 45.0797L61.14 27.0403C61.6825 27.1759 63.7834 28.2372 67.9275 27.74L63.3194 46.6772ZM60.7594 24.1684C53.8994 21.1637 50.8288 21.285 35.3219 19.7122V8.52467C49.8188 7.04686 53.6347 7.15404 61.4125 3.77154C68.8006 0.556544 76.8709 5.98217 77.1656 13.6715C77.4916 22.4122 68.3519 27.9769 60.7594 24.1684Z"></path>
    <path d="M66.9975 19.9998C66.7287 19.9998 66.4537 19.9873 66.1881 19.9685C65.4975 19.9216 64.9006 20.4404 64.8506 21.1279C64.8037 21.8154 65.3225 22.4154 66.01 22.4623C66.3381 22.4873 66.6694 22.4998 66.9975 22.4998C67.6881 22.4998 68.2475 21.9373 68.2475 21.2498C68.2475 20.5591 67.6881 19.9998 66.9975 19.9998Z"></path>
    <path d="M62.1031 18.8842C59.975 17.9373 57.825 17.1873 55.7156 16.6529C54.1075 16.2489 53.5047 18.6723 55.1 19.0748C57.075 19.5748 59.0875 20.2779 61.0875 21.1685C61.7125 21.4517 62.4575 21.166 62.7375 20.5342C63.0188 19.9029 62.7344 19.1654 62.1031 18.8842Z"></path>
    <path d="M60.072 44.0044C59.0508 44.0044 58.2227 44.8322 58.2227 45.8538C58.2227 46.8753 59.0505 47.7031 60.072 47.7031C61.0933 47.7031 61.9214 46.8753 61.9214 45.8538C61.9214 44.8322 61.0933 44.0044 60.072 44.0044Z"></path>
    <path d="M4.80469 7.56519C7.13875 7.56519 8.23313 8.088 9.50031 8.693C10.8469 9.33612 12.3728 10.0652 15.2734 10.0652C15.9637 10.0652 16.5234 9.5055 16.5234 8.81519C16.5234 8.12487 15.9637 7.56519 15.2734 7.56519C12.9394 7.56519 11.845 7.04237 10.5778 6.43737C9.23125 5.79425 7.70531 5.06519 4.80469 5.06519C4.11437 5.06519 3.55469 5.62487 3.55469 6.31519C3.55469 7.0055 4.11437 7.56519 4.80469 7.56519Z"></path>
    <path d="M4.80469 14.114C7.13875 14.114 8.23313 14.6368 9.50031 15.2418C10.8469 15.885 12.3728 16.614 15.2734 16.614C15.9637 16.614 16.5234 16.0543 16.5234 15.364C16.5234 14.6737 15.9637 14.114 15.2734 14.114C12.9394 14.114 11.845 13.5912 10.5778 12.9862C9.23125 12.3431 7.70531 11.614 4.80469 11.614C4.11437 11.614 3.55469 12.1737 3.55469 12.864C3.55469 13.5543 4.11437 14.114 4.80469 14.114Z"></path>
    <path d="M4.80469 20.6631C9.63656 20.6631 9.72437 23.1631 15.2734 23.1631C15.9637 23.1631 16.5234 22.6034 16.5234 21.9131C16.5234 21.2228 15.9637 20.6631 15.2734 20.6631C12.9394 20.6631 11.845 20.1403 10.5778 19.5353C9.23125 18.8921 7.70531 18.1631 4.80469 18.1631C4.11437 18.1631 3.55469 18.7228 3.55469 19.4131C3.55469 20.1034 4.11437 20.6631 4.80469 20.6631Z"></path>
  </svg>
);
const svg5 = (
  <svg
    className="fill-primary"
    width="80"
    height="74"
    viewBox="0 0 80 74"
    fill="none"
  >
    <path d="M19.2849 8.78585C19.833 9.21022 20.6177 9.10647 21.0386 8.56335C22.4946 6.68428 17.7455 4.36241 15.1296 6.90053C14.6342 7.38116 14.6221 8.17241 15.1027 8.66804C15.5833 9.16335 16.3746 9.17585 16.8702 8.69491C16.9746 8.59366 17.9299 7.73616 19.2849 8.78585Z"></path>
    <path d="M17.9317 13.5104C18.8238 13.5104 19.547 12.7872 19.547 11.8951C19.547 11.003 18.8238 10.2798 17.9317 10.2798C17.0396 10.2798 16.3164 11.003 16.3164 11.8951C16.3164 12.7872 17.0396 13.5104 17.9317 13.5104Z"></path>
    <path d="M77.7562 49.1209C76.8659 49.1209 76.1416 48.3965 76.1416 47.5062V45.36C76.1416 39.7312 71.5622 35.1515 65.9331 35.1515C62.7716 35.1515 34.9006 35.1515 31.7 35.1515V33.9528C52.7116 34.8853 73.5837 26.294 79.6269 5.31122C79.8178 4.64778 79.435 3.95528 78.7719 3.76403C78.1078 3.57372 77.4156 3.95622 77.2247 4.61935C73.6253 17.1159 64.7344 25.4172 50.7981 29.2928C42.3734 31.6359 34.5456 31.57 31.7003 31.4453V30.0762C31.7003 29.5053 31.5047 28.9806 31.1797 28.5606C31.3984 28.3537 31.5994 28.129 31.7825 27.8893C32.5709 30.5565 36.5694 30.9503 37.9059 28.224C37.995 28.0425 38.0509 27.8687 38.09 27.7372L41.1947 17.2612C41.7287 15.4584 41.2581 13.4897 39.9659 12.1234C39.87 12.0218 29.8572 1.42341 29.7475 1.33653C28.8959 0.661846 27.7991 0.493408 26.8141 0.848721C25.7569 0.448096 24.6416 0.243408 23.4887 0.243408H20.82C15.6109 0.243408 11.3731 4.48153 11.3731 9.69028V11.459C11.3731 11.7262 11.1572 11.9434 10.8919 11.9434C9.225 11.9434 8.07312 11.8615 6.3825 12.4537L6.36375 12.4475C-3.65657 16.5672 -0.217504 30.0937 9.385 30.0937H12.9594V43.3603C12.9594 48.3675 15.1537 52.87 18.6287 55.9631V64.6937H16.4912C14.2797 64.6937 12.1162 66.3509 12.1162 69.3812C12.1162 71.7937 14.0787 73.7562 16.4912 73.7562H23.0287C25.4412 73.7562 27.4037 71.7937 27.4037 69.3812V60.0578C28.1978 60.1728 29.0087 60.2353 29.8344 60.2353H52.1975V64.694H50.0631C47.6506 64.694 45.6881 66.6565 45.6881 69.069C45.6881 72.1112 47.8691 73.7565 50.0631 73.7565H56.5975C59.01 73.7565 60.9725 71.794 60.9725 69.3815V58.9856C63.6494 57.4087 65.4506 54.4981 65.4506 51.1728V44.5172C65.8516 44.7165 66.1978 45.0112 66.45 45.385C67.3528 46.7222 67.6206 48.0203 67.6206 49.4803C67.6206 54.3697 73.7219 59.0343 79.2438 52.2506C80.2653 50.9965 79.3716 49.1209 77.7562 49.1209ZM28.1394 3.25685L38.1491 13.8418C38.8306 14.5625 39.0787 15.6009 38.7972 16.5515L35.6928 27.0272C35.6831 27.06 35.6744 27.0934 35.6609 27.1234C35.3806 27.6956 34.5703 27.7581 34.2062 27.2397C34.2037 27.2356 34.1978 27.2262 34.1866 27.2047L27.2741 3.82497C27.1972 3.33622 27.7453 3.00122 28.1394 3.25685ZM13.8728 11.4593V9.69059C13.8728 5.85997 16.9891 2.74372 20.8197 2.74372C23.6247 2.74372 23.9978 2.7031 24.8872 2.88497C24.5512 4.05153 24.4262 3.00966 30.4322 23.3228V24.5093C30.4322 26.2078 29.0519 27.59 27.3537 27.5934H17.1819C18.8228 24.2084 18.7591 20.5778 16.9569 16.974C15.9175 14.8959 14.5441 13.3218 13.6959 12.4618C13.8084 12.1481 13.8728 11.8115 13.8728 11.4593ZM6.31312 15.2078C6.39218 15.3603 6.36625 15.8243 6.36625 16.0137C6.36625 17.2368 5.37125 18.2315 4.14812 18.2315C3.74343 18.2315 3.83718 18.2315 3.43125 18.2315C4.02156 16.9778 5.01968 15.8918 6.31312 15.2078ZM9.385 27.5937C6.69562 27.5937 4.41875 25.9937 3.39125 23.7125C6.78968 26.3422 11.7197 23.8987 11.7197 19.6243C11.7197 18.934 11.16 18.3743 10.4697 18.3743C9.77937 18.3743 9.21968 18.934 9.21968 19.6243C9.21968 22.4793 5.31093 23.3365 4.11875 20.7312H4.14843C6.75 20.7312 8.86656 18.615 8.86656 16.0134C8.86656 15.414 8.89718 15.0325 8.71218 14.479C9.95656 14.3525 10.9994 14.61 11.9525 14.245C13.7181 16.0253 18.1978 21.4618 14.3287 27.5934L9.385 27.5937ZM15.4425 30.0937H27.3478C27.3478 30.0937 27.3031 30.0787 29.2003 30.0762V35.1515H15.4562L15.4425 30.0937ZM24.9041 69.3812C24.9041 70.4153 24.0631 71.2562 23.0291 71.2562H16.4916C13.9884 71.2562 13.9812 67.1937 16.4916 67.1937H19.8791C20.5694 67.1937 21.1291 66.634 21.1291 65.9437V57.8106C22.3022 58.52 23.5681 59.0897 24.9041 59.4984V69.3812ZM58.4725 69.3812C58.4725 70.4153 57.6316 71.2562 56.5975 71.2562H50.0631C47.56 71.2562 47.5528 67.1937 50.0631 67.1937H53.4475C54.1378 67.1937 54.6975 66.634 54.6975 65.9437V60.235C56.4659 60.235 57.2184 60.2868 58.4725 59.9903V69.3812ZM62.9509 51.1728C62.9509 54.7915 60.0069 57.7353 56.3884 57.7353H53.4553C53.4528 57.7353 53.4503 57.7347 53.4478 57.7347C53.4453 57.7347 53.4428 57.7353 53.4403 57.7353H29.8344C21.9081 57.7353 15.4594 51.2865 15.4594 43.3603V37.6518H56.3881C60.0066 37.6518 62.9506 40.5956 62.9506 44.2143L62.9509 51.1728ZM70.1209 49.4803C70.1209 47.5422 69.7191 45.7584 68.5225 43.9859C67.7375 42.8234 66.5075 42.0465 65.1234 41.8056C64.6797 40.1984 63.8037 38.7697 62.6284 37.6515H65.9334C70.1841 37.6515 73.6419 41.1093 73.6419 45.36V47.5062C73.6419 49.3778 74.8984 50.9615 76.6119 51.4587C73.1884 55.0062 70.1209 52.1706 70.1209 49.4803Z"></path>
    <path d="M47.9688 53.1509H42.9688C42.2784 53.1509 41.7188 53.7106 41.7188 54.4009C41.7188 55.0912 42.2784 55.6509 42.9688 55.6509H47.9688C48.6591 55.6509 49.2188 55.0912 49.2188 54.4009C49.2188 53.7106 48.6591 53.1509 47.9688 53.1509Z"></path>
    <path d="M54.4375 53.1509H52.6562C51.9659 53.1509 51.4062 53.7106 51.4062 54.4009C51.4062 55.0912 51.9659 55.6509 52.6562 55.6509H54.4375C55.1278 55.6509 55.6875 55.0912 55.6875 54.4009C55.6875 53.7106 55.1278 53.1509 54.4375 53.1509Z"></path>
  </svg>
);
export const PetServices = () => {
  return (
    <section id="petservices" className="mt-12 w-screen">
      <ul className="my-4 flex flex-wrap justify-around">
        <PopoverService
          svg={svg1}
          title="Огляд тварини"
          content="Швидкий перегляд, при якому ми переконуємось, що
            тварину здорову та об'єктивно оцінюємо «фронт роботи»."
        />

        <PopoverService
          svg={svg2}
          title="Вичісування"
          content="Ця послуга адаптована до потреб кожного вихованця,
            включаючи видалення ковтунів із проблемних зон."
        />

        <PopoverService
          svg={svg3}
          title="Купання"
          content="М'якими масажними рухами втираємо гіпоалергенний шампунь в
            шерсть або волосся вашого вихованця, щоб видалити бруд і пил."
        />

        <PopoverService
          svg={svg4}
          title="Стрижка"
          content="Наші стилісти творять чудеса, створюючи вражаючі фасони для
            ваших улюблених улюбленців."
        />

        <PopoverService
          svg={svg5}
          title="Гігігена"
          content="Проведення необхідних гігієнічних процедур: очищення вух,
            параанальних залоз."
        />
      </ul>
      <article className="w-screen">
        <div className="overflow-hidden w-4/5 mx-auto">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                className=" grayscale"
                src="https://github.com/Eternal-Love-and-Fire/PetVibe-1/blob/main/src/assets/haircut-old-dog.jpeg"
                alt="old photo"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://github.com/Eternal-Love-and-Fire/PetVibe-1/blob/main/src/assets/haircut-new-dog.jpeg.jpeg"
                alt="old photo"
              />
            }
          />
        </div>
      </article>
    </section>
  );
};
