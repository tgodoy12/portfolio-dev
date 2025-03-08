import React from "react";
import { IconProps } from "./iconTypes";

const ProjectIcon: React.FC<IconProps> = ({ className, size = 24, color }) => {
    return(
        <svg className={className} width={size} height={size} viewBox="0 -7.5 154 154" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0)"> <path d="M174.294 75.7536C174.369 62.3134 173.95 50.5581 173.013 39.817C171.701 24.78 163.339 16.4959 148.833 15.8542C142.673 15.582 136.402 15.7895 130.338 15.9839C127.581 16.074 124.73 16.168 121.929 16.2146C121.023 16.2295 120.123 16.2249 119.346 16.221H118.93C118.614 15.3168 118.311 14.4354 118.013 13.5708C117.284 11.4533 116.59 9.4499 115.833 7.46527C115.805 7.3661 115.778 7.2657 115.75 7.16718C115.393 5.79388 114.656 4.54941 113.625 3.57703C111.718 1.35971 109.084 0.28303 105.74 0.367937C101.201 0.486548 96.5835 0.5708 92.1183 0.651819C85.2767 0.776264 78.2016 0.904681 71.2455 1.16135C67.5099 1.29876 65.4653 1.95092 64.1417 3.61342C63.2705 4.13049 62.557 4.87616 62.0783 5.77023C60.421 9.30076 59.4689 13.122 59.2755 17.0188H58.1521C56.3675 17.0188 54.7193 17.0139 53.0705 17.0242C51.0957 17.0352 49.1202 17.0352 47.1448 17.0359C42.3381 17.0359 37.3669 17.0358 32.4788 17.2005C26.5242 17.4203 20.6635 18.7557 15.1998 21.1378C7.51144 24.4434 3.6685 29.8741 3.45051 37.7336C3.30304 43.075 3.09608 48.5059 2.89621 53.7572C2.72286 58.3085 2.54324 63.0149 2.40287 67.6465C2.32784 70.138 2.3237 72.6716 2.31917 75.1216C2.31141 79.4273 2.30317 83.88 1.90795 88.2097C0.907289 99.1666 1.0838 107.959 2.46351 115.878C3.71062 123.033 7.05605 128.816 12.1402 132.601C16.7689 136.145 22.3892 138.147 28.2118 138.326C31.2536 138.412 34.2952 138.506 37.3367 138.607C44.8937 138.85 52.7074 139.101 60.399 139.161C76.6964 139.291 91.9793 139.356 106.652 139.356C113.375 139.356 119.983 139.342 126.475 139.316C133.812 139.286 141.741 138.947 150.717 138.278C162.037 137.436 169.729 131.214 172.957 120.279C174.056 116.619 174.642 112.822 174.698 109.001C174.73 103.442 174.612 97.7945 174.498 92.3325C174.38 86.8959 174.26 81.2777 174.294 75.7536ZM164.808 93.4448C164.867 98.7349 164.929 104.026 164.994 109.317C165.044 113.435 164.081 117.503 162.188 121.159C160.464 124.529 157.919 126.53 154.604 127.101C150.96 127.832 147.264 128.266 143.551 128.401C130.412 128.499 117.051 128.484 104.128 128.472C99.4593 128.467 94.7917 128.464 90.1241 128.462C85.3524 128.462 80.5826 128.464 75.8147 128.467C64.2942 128.476 52.384 128.486 40.671 128.421C36.271 128.388 31.8758 128.123 27.5039 127.624C19.3841 126.709 13.6163 121.041 12.0761 112.463C10.3646 102.936 10.5607 93.1609 10.7496 83.7109C10.7826 82.0613 10.8144 80.4131 10.839 78.7655C10.8782 75.9811 10.9372 73.1869 11.0162 70.3843C12.7533 70.7265 14.5139 70.9372 16.2828 71.0137C20.5067 71.155 24.7997 71.1433 28.9524 71.1323C30.9304 71.1277 32.9077 71.1213 34.8838 71.1323C35.6516 71.1368 36.4096 71.1809 37.2874 71.2314C37.5228 71.2457 37.7642 71.2593 38.0138 71.2729C38.0138 72.0656 38.0089 72.8369 38.005 73.5926C37.9953 75.6667 37.9854 77.6254 38.0261 79.5874C38.1135 83.7776 39.8476 85.7739 43.8243 86.2633C47.5834 86.6729 51.3629 86.8648 55.144 86.8382H55.2779C62.5568 86.8382 65.304 84.033 65.3952 76.5326C65.4114 75.2104 65.4071 73.8863 65.4025 72.5368V71.2904H114.003C114.003 71.4486 114.003 71.6048 114.003 71.7584C113.998 72.5653 113.993 73.3139 114.015 74.058C114.055 75.4237 114.095 76.5618 114.214 77.7421C114.66 82.1806 116.607 84.07 120.941 84.2631C124.398 84.4174 128.102 84.3927 131.947 84.1834C135.704 83.9812 137.98 81.863 138.527 78.0571C138.764 76.4069 138.867 74.7204 138.975 72.9367C139.015 72.2788 139.056 71.5996 139.104 70.8912L144.521 70.8944C149.863 70.8976 155.089 70.9022 160.313 70.8769C161.722 70.8847 163.13 70.8199 164.533 70.6825C164.636 78.3313 164.722 85.9613 164.808 93.4448ZM77.4842 9.33252C81.9571 9.16724 86.4934 9.10508 90.9456 9.06036C95.6566 9.17638 100.496 9.29181 105.269 9.367C105.668 9.3659 106.065 9.40757 106.454 9.49138C106.907 9.97658 107.199 10.5911 107.287 11.2497C107.589 12.5576 107.981 13.8427 108.463 15.0953C108.552 15.6596 108.65 16.2234 108.756 16.7869H68.2583C69.8942 9.61446 70.0022 9.60993 77.4875 9.33317L77.4842 9.33252ZM130.158 71.2826C130.133 71.492 130.109 71.6994 130.085 71.9062C129.992 72.9445 129.824 73.9744 129.584 74.9887C129.423 75.4107 129.107 75.7555 128.701 75.9519C126.747 76.1625 124.775 76.2559 122.689 76.355C122.136 76.381 121.577 76.4075 121.008 76.4367L120.425 71.2826H130.158ZM55.9962 71.3546V77.5489H45.9667L45.1524 71.6767C47.2611 70.9074 52.3738 70.7505 55.9994 71.3546H55.9962ZM163.639 61.0711C163.421 61.0866 163.205 61.1015 162.987 61.1106C161.852 61.1573 160.718 61.2122 159.582 61.2673C157.119 61.3865 154.57 61.5092 152.069 61.5423C140.438 61.697 128.807 61.8405 117.176 61.9727C106.795 62.0959 96.414 62.2228 86.0335 62.3538C66.1296 62.613 46.2259 62.8853 26.323 63.1709L11.2224 63.3823C11.3847 58.5536 11.5737 53.7443 11.7606 49.0154C11.8589 46.5356 11.9559 44.0564 12.0512 41.5779C12.4095 32.1396 14.1338 29.9345 22.9075 27.6984C28.3113 26.3008 33.8613 25.5493 39.4414 25.4596C51.0237 25.319 62.8033 25.3386 74.1963 25.3567C83.4746 25.3723 93.0705 25.3885 102.508 25.3172C107.877 25.2777 113.322 25.0319 118.59 24.7947C122.78 24.6061 127.112 24.411 131.37 24.3216C137.209 24.1978 143.248 24.0707 149.168 24.6871C157.849 25.59 161.846 29.6318 162.964 38.6365C163.647 43.5527 164.075 48.5014 164.245 53.4623C164.293 55.978 164.338 58.5003 164.379 61.0289C164.132 61.038 163.884 61.0555 163.642 61.0711H163.639Z" fill={color}></path> </g> <defs> <clipPath id="clip0"> <rect width="140" height="140" fill="white" transform="translate(0.777344)"></rect> </clipPath> </defs> </g></svg>
    );
}

export default ProjectIcon;