"use client";

import * as React from "react";

export function Signature() {
  return (
    <svg
      className="h-auto w-16 text-muted-foreground"
      viewBox="0 0 106 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.512 25.08C4.128 24.9733 3.81867 24.8773 3.584 24.792C3.34933 24.728 3.232 24.696 3.232 24.696C3.27467 24.5893 3.25333 24.4933 3.168 24.408C3.104 24.3227 2.95467 24.2693 2.72 24.248C2.4 24.0347 2.06933 23.736 1.728 23.352C1.38667 22.968 1.088 22.5733 0.832 22.168C0.576 21.7627 0.405334 21.464 0.32 21.272C0.170667 20.952 0.181334 20.76 0.352 20.696C0.522667 20.6107 0.725334 20.5147 0.96 20.408C1.19467 20.2373 1.44 20.1093 1.696 20.024C1.97333 19.9387 2.19733 20.0773 2.368 20.44C2.64533 20.9307 3.072 21.3467 3.648 21.688C4.24533 22.0293 4.91733 22.232 5.664 22.296C6.432 22.36 7.2 22.232 7.968 21.912C8.48 21.6773 8.75733 21.3573 8.8 20.952C8.84267 20.5253 8.68267 20.0347 8.32 19.48C8.256 19.3093 8.16 19.1707 8.032 19.064C7.92533 18.9573 7.75467 18.8187 7.52 18.648C7.30667 18.4773 6.99733 18.2 6.592 17.816C6.272 17.6667 5.97333 17.528 5.696 17.4C5.44 17.272 5.16267 17.1333 4.864 16.984C4.52267 16.8133 4.13867 16.5787 3.712 16.28C3.28533 15.96 2.89067 15.6187 2.528 15.256C2.16533 14.872 1.888 14.5093 1.696 14.168C1.35467 13.848 1.14133 13.4107 1.056 12.856C0.970667 12.28 0.981334 11.672 1.088 11.032C1.216 10.392 1.41867 9.816 1.696 9.304C1.824 9.00533 2.05867 8.62133 2.4 8.152C2.74133 7.66133 3.12533 7.16 3.552 6.648C3.97867 6.136 4.384 5.67733 4.768 5.272C5.17333 4.84533 5.49333 4.55733 5.728 4.408C5.89867 4.23733 6.08 4.06667 6.272 3.896C6.464 3.704 6.56 3.608 6.56 3.608C6.58133 3.50133 6.61333 3.448 6.656 3.448C6.72 3.448 6.752 3.448 6.752 3.448C6.85867 3.384 7.09333 3.27733 7.456 3.128C7.81867 2.97867 8.21333 2.70133 8.64 2.296C10.0693 1.61333 11.2853 1.15467 12.288 0.919998C13.2907 0.663999 14.08 0.535999 14.656 0.535999C15.1893 0.557332 15.712 0.706666 16.224 0.983999C16.736 1.24 17.1733 1.57067 17.536 1.976C17.92 2.38133 18.144 2.84 18.208 3.352C18.3573 3.864 18.2827 4.48267 17.984 5.208C17.7067 5.912 17.312 6.584 16.8 7.224C16.3093 7.84267 15.7973 8.30133 15.264 8.6C14.6667 8.856 14.1547 8.888 13.728 8.696C13.3227 8.504 13.1307 8.20533 13.152 7.8C13.152 7.62933 13.2053 7.42667 13.312 7.192C13.44 6.95733 13.7707 6.54133 14.304 5.944C14.9867 4.94133 15.3493 4.22667 15.392 3.8C15.4347 3.37333 15.2427 3.128 14.816 3.064C14.688 3.02133 14.4427 3.032 14.08 3.096C13.7173 3.16 13.3227 3.24533 12.896 3.352C12.4907 3.43733 12.128 3.53333 11.808 3.64C11.5093 3.74667 11.36 3.82133 11.36 3.864C11.36 3.864 11.36 3.896 11.36 3.96C11.36 4.024 11.3173 4.04533 11.232 4.024C11.1893 4.024 11.04 4.09867 10.784 4.248C10.5493 4.376 10.2613 4.54667 9.92 4.76C9.57867 4.97333 9.23733 5.19733 8.896 5.432C8.576 5.64533 8.29867 5.83733 8.064 6.008C7.82933 6.17867 7.70133 6.28533 7.68 6.328C7.63733 6.56267 7.392 6.776 6.944 6.968C6.51733 7.224 6.144 7.58667 5.824 8.056C5.504 8.52533 5.13067 9.12267 4.704 9.848C4.34133 10.3387 4.08533 10.872 3.936 11.448C3.78667 12.0027 3.78667 12.4507 3.936 12.792C4.04267 13.1333 4.33067 13.4747 4.8 13.816C5.29067 14.136 5.952 14.5413 6.784 15.032C7.50933 15.4373 8.192 15.864 8.832 16.312C9.472 16.76 10.016 17.1973 10.464 17.624C10.912 18.0293 11.2 18.3707 11.328 18.648C11.584 19.0107 11.7333 19.4267 11.776 19.896C11.84 20.3653 11.84 20.824 11.776 21.272C11.7333 21.6987 11.6693 22.0507 11.584 22.328C11.4347 22.6693 11.2 23.032 10.88 23.416C10.5813 23.8 10.304 23.9813 10.048 23.96C9.81333 24.024 9.632 24.0987 9.504 24.184C9.39733 24.2693 9.26933 24.344 9.12 24.408C8.97067 24.4933 8.61867 24.5893 8.064 24.696C7.50933 24.824 6.90133 24.92 6.24 24.984C5.57867 25.0693 5.00267 25.1013 4.512 25.08ZM15.7648 22.456C15.5941 22.2853 15.4661 22.0293 15.3808 21.688C15.3168 21.3467 15.2954 21.016 15.3168 20.696C15.3381 20.3547 15.3914 20.0987 15.4768 19.928C15.4768 19.7573 15.4981 19.6293 15.5408 19.544C15.6048 19.4373 15.6261 19.3413 15.6048 19.256C15.5834 19.1707 15.6048 19.0213 15.6688 18.808C15.7328 18.5947 15.7968 18.392 15.8608 18.2C16.0101 17.8587 16.1808 17.4213 16.3728 16.888C16.5648 16.3333 16.7568 15.7787 16.9488 15.224C17.1408 14.648 17.3008 14.1573 17.4288 13.752C17.5568 13.3253 17.6314 13.0693 17.6528 12.984C17.6528 12.728 17.8234 12.5893 18.1648 12.568C18.4208 12.4827 18.7301 12.5893 19.0928 12.888C19.4554 13.1867 19.7434 13.5067 19.9568 13.848C20.1274 14.0187 20.1914 14.2427 20.1488 14.52C20.1061 14.7973 19.9674 15.192 19.7328 15.704C19.6474 15.8747 19.5408 16.1627 19.4128 16.568C19.3061 16.952 19.2314 17.272 19.1888 17.528C19.1034 17.6987 18.9968 17.944 18.8688 18.264C18.7621 18.5627 18.6661 18.8507 18.5808 19.128C18.5381 19.2347 18.4954 19.4373 18.4528 19.736C18.4101 20.0133 18.3568 20.3013 18.2928 20.6C18.2288 20.8987 18.1434 21.1333 18.0368 21.304C17.8448 22.1787 17.5034 22.6907 17.0128 22.84C16.5434 22.9893 16.1274 22.8613 15.7648 22.456ZM19.2208 9.624C18.9861 9.45333 18.8048 9.25067 18.6768 9.016C18.5701 8.76 18.5061 8.536 18.4848 8.344C18.4848 8.152 18.5061 8.03467 18.5488 7.992C18.7621 7.75733 18.9434 7.448 19.0928 7.064C19.2634 6.68 19.4448 6.328 19.6368 6.008C19.6794 5.944 19.7328 5.85867 19.7968 5.752C19.8821 5.624 19.9674 5.54933 20.0528 5.528C20.3088 5.35733 20.6608 5.368 21.1088 5.56C21.5781 5.752 21.9194 6.01867 22.1328 6.36C22.3248 6.76533 22.3781 7.18133 22.2928 7.608C22.2288 8.03467 22.0048 8.48267 21.6208 8.952C21.3008 9.37867 20.8954 9.656 20.4048 9.784C19.9141 9.89067 19.5194 9.83733 19.2208 9.624ZM25.598 29.4C25.0007 29.6347 24.3713 29.592 23.71 29.272C23.07 28.9733 22.5153 28.4933 22.046 27.832C21.9607 27.704 21.8327 27.4693 21.662 27.128C21.4913 26.808 21.3207 26.456 21.15 26.072C21.0007 25.688 20.8833 25.3573 20.798 25.08C20.734 24.8027 20.734 24.6427 20.798 24.6C20.8833 24.3653 21.0753 24.2267 21.374 24.184C21.6727 24.1413 21.9713 24.152 22.27 24.216C22.5687 24.3013 22.7393 24.408 22.782 24.536C22.846 24.6853 22.91 24.8347 22.974 24.984C23.038 25.1547 23.1127 25.304 23.198 25.432C23.3047 25.5813 23.4007 25.7093 23.486 25.816C23.7207 26.1787 23.9767 26.424 24.254 26.552C24.5313 26.7013 24.7447 26.7227 24.894 26.616C25.2567 26.3387 25.5233 26.008 25.694 25.624C25.886 25.2613 26.1313 24.6107 26.43 23.672C26.6647 22.8827 26.8673 22.2 27.038 21.624C27.2087 21.048 27.39 20.5147 27.582 20.024C27.646 19.768 27.7207 19.5547 27.806 19.384C27.9127 19.192 28.0087 19.0533 28.094 18.968H28.286C27.8167 19.2667 27.422 19.5653 27.102 19.864C26.782 20.1627 26.3447 20.4293 25.79 20.664C25.662 20.8133 25.342 20.9093 24.83 20.952C24.3393 20.9733 23.8593 20.9093 23.39 20.76C23.0913 20.5893 22.846 20.4187 22.654 20.248C22.4833 20.056 22.334 19.8427 22.206 19.608C22.0993 19.3733 21.982 19.096 21.854 18.776C21.7047 18.456 21.6833 17.9333 21.79 17.208C21.8967 16.4827 22.0887 15.7573 22.366 15.032C22.622 14.4987 22.9953 13.9227 23.486 13.304C23.9767 12.6853 24.4993 12.1307 25.054 11.64C25.6087 11.128 26.11 10.808 26.558 10.68C26.7287 10.5947 27.0273 10.4987 27.454 10.392C27.8807 10.264 28.286 10.2533 28.67 10.36C29.0327 10.4027 29.31 10.488 29.502 10.616C29.694 10.7227 30.0033 10.9573 30.43 11.32C30.7073 11.5973 31.0487 11.96 31.454 12.408C31.8593 12.8347 32.1153 13.1973 32.222 13.496C32.3713 13.816 32.4033 14.168 32.318 14.552C32.2327 14.9147 32.0833 15.2347 31.87 15.512C31.678 15.7893 31.4753 16.0667 31.262 16.344C31.0487 16.6213 30.8887 17.0053 30.782 17.496C30.6753 18.136 30.4727 18.8613 30.174 19.672C29.8753 20.4613 29.6407 21.1973 29.47 21.88L28.958 23.864C28.4247 25.6773 27.838 26.9893 27.198 27.8C26.558 28.632 26.0247 29.1653 25.598 29.4ZM24.926 18.392C25.3527 18.3707 25.7153 18.328 26.014 18.264C26.334 18.1787 26.6327 18.008 26.91 17.752C27.1873 17.4747 27.5073 17.0587 27.87 16.504C28.2327 15.992 28.4887 15.5227 28.638 15.096C28.7873 14.6693 28.8407 14.1893 28.798 13.656C28.7767 13.3147 28.6807 13.0907 28.51 12.984C28.3393 12.8773 28.1153 12.8453 27.838 12.888C27.4327 12.952 27.07 13.1227 26.75 13.4C26.43 13.656 26.0567 14.0613 25.63 14.616C25.31 15.0427 25.0433 15.5547 24.83 16.152C24.6167 16.792 24.5207 17.304 24.542 17.688C24.5847 18.072 24.7127 18.3067 24.926 18.392ZM43.8143 22.872C43.4943 22.872 43.1849 22.776 42.8863 22.584C42.5876 22.3707 42.3423 22.0827 42.1503 21.72C41.9583 21.336 41.8623 20.888 41.8623 20.376C41.8623 20.056 41.9156 19.608 42.0223 19.032C42.1503 18.4347 42.3316 17.688 42.5663 16.792C42.6089 16.4933 42.6409 16.3013 42.6623 16.216C42.7049 16.1307 42.7263 16.0453 42.7263 15.96C42.7263 15.9173 42.7156 15.8853 42.6943 15.864C42.6943 15.8213 42.6729 15.8 42.6303 15.8C42.4596 15.8 42.2249 15.9173 41.9263 16.152C41.6489 16.3653 41.3289 16.6213 40.9663 16.92C40.9023 16.9627 40.8276 17.016 40.7423 17.08C40.6783 17.144 40.6036 17.208 40.5183 17.272C40.4543 17.336 40.3796 17.4 40.2943 17.464C40.0809 17.592 39.7503 17.8373 39.3023 18.2C38.8756 18.5627 38.4276 18.9467 37.9583 19.352C37.5103 19.7573 37.1156 20.0987 36.7743 20.376C36.6036 20.504 36.4543 20.6107 36.3263 20.696C36.2196 20.7813 36.1449 20.824 36.1023 20.824C36.0596 20.824 35.8889 20.7707 35.5903 20.664C35.3129 20.536 35.0356 20.3653 34.7583 20.152C34.5023 19.9173 34.3743 19.6507 34.3743 19.352C34.3743 19.16 34.4489 18.776 34.5983 18.2C34.7689 17.624 35.0036 16.9413 35.3023 16.152C35.6009 15.3627 35.9423 14.5627 36.3263 13.752C36.4116 13.56 36.4756 13.304 36.5183 12.984C36.5609 12.664 36.6036 12.3547 36.6463 12.056C36.7103 11.736 36.8169 11.5013 36.9663 11.352C37.0303 11.2453 37.1049 11.1707 37.1903 11.128C37.2969 11.064 37.4036 11.032 37.5103 11.032C37.7236 11.032 37.9263 11.0853 38.1183 11.192C38.3103 11.2773 38.4916 11.4267 38.6623 11.64C38.9823 11.9813 39.1529 12.3867 39.1743 12.856C39.2169 13.304 39.1849 13.7413 39.0783 14.168C38.9716 14.5947 38.8543 14.9467 38.7263 15.224C38.5983 15.48 38.5343 15.5867 38.5343 15.544C38.6196 15.5013 38.7369 15.3947 38.8863 15.224C39.0569 15.0533 39.3449 14.8507 39.7503 14.616C40.3049 14.1893 40.7316 13.8907 41.0303 13.72C41.3289 13.528 41.5529 13.3893 41.7023 13.304C41.8729 13.2187 42.0223 13.1227 42.1503 13.016C42.2569 12.9307 42.3316 12.8773 42.3743 12.856C42.4383 12.8347 42.4703 12.824 42.4703 12.824C42.5343 12.824 42.6409 12.7813 42.7903 12.696C42.9609 12.6107 43.1209 12.568 43.2703 12.568C43.4836 12.568 43.7076 12.6213 43.9423 12.728C44.1769 12.8133 44.3796 12.9413 44.5503 13.112C44.7209 13.2613 44.8063 13.4213 44.8063 13.592C44.8063 13.656 44.8276 13.7093 44.8703 13.752C44.9129 13.7947 44.9556 13.848 44.9983 13.912C45.1049 14.04 45.2223 14.2213 45.3503 14.456C45.4996 14.6693 45.5743 15.0213 45.5743 15.512C45.5743 15.8533 45.4996 16.3547 45.3503 17.016C45.2009 17.6773 45.0409 18.328 44.8703 18.968C44.6996 19.6293 44.6143 20.1627 44.6143 20.568C44.6356 20.952 44.6783 21.2507 44.7423 21.464C44.8063 21.656 44.8383 21.816 44.8383 21.944C44.8383 22.1147 44.7529 22.3173 44.5823 22.552C44.4116 22.7653 44.1556 22.872 43.8143 22.872ZM51.1418 22.552C50.9711 22.5947 50.7471 22.616 50.4698 22.616C50.1924 22.5947 49.9471 22.5627 49.7338 22.52C49.5418 22.456 49.4458 22.392 49.4458 22.328C49.4458 22.2213 49.3924 22.168 49.2858 22.168C49.2858 22.168 49.1684 22.0827 48.9338 21.912C48.6991 21.72 48.4858 21.5813 48.2938 21.496C48.1018 21.1973 47.9738 20.856 47.9098 20.472C47.8671 20.0667 47.9951 19.3627 48.2938 18.36C48.3151 17.6773 48.5071 16.9627 48.8698 16.216C49.2324 15.448 49.6911 14.7013 50.2458 13.976C50.8004 13.2507 51.3764 12.6107 51.9738 12.056C52.5711 11.48 53.1044 11.0533 53.5738 10.776C53.8724 10.4773 54.2671 10.3173 54.7578 10.296C55.2698 10.2747 55.7178 10.3707 56.1018 10.584C56.3151 10.6907 56.5498 10.904 56.8058 11.224C57.0618 11.544 57.3071 11.8853 57.5418 12.248C57.7764 12.5893 57.9578 12.8987 58.0858 13.176C58.1498 13.4107 58.2031 13.624 58.2458 13.816C58.3098 13.9867 58.3524 14.2 58.3738 14.456C58.3951 14.712 58.3738 15.096 58.3098 15.608C58.2031 15.992 58.1071 16.3867 58.0218 16.792C57.9578 17.176 57.9258 17.5707 57.9258 17.976C57.8831 18.3813 57.9258 18.6693 58.0538 18.84C58.2031 19.0107 58.4164 19.0213 58.6938 18.872C58.9498 18.744 59.2164 18.7333 59.4938 18.84C59.7711 18.9253 59.9631 19.096 60.0698 19.352C60.1978 19.5867 60.1658 19.896 59.9738 20.28C59.8458 20.5573 59.6431 20.824 59.3658 21.08C59.0884 21.336 58.7791 21.5493 58.4378 21.72C58.0964 21.8693 57.7658 21.944 57.4458 21.944C57.2111 21.944 56.9764 21.8587 56.7418 21.688C56.5071 21.496 56.2938 21.24 56.1018 20.92C55.9098 20.6 55.7498 20.248 55.6218 19.864L55.4298 19.128L54.2778 20.184C54.0004 20.4827 53.7231 20.76 53.4458 21.016C53.1898 21.2507 53.0298 21.4213 52.9658 21.528C52.8591 21.72 52.6458 21.8907 52.3258 22.04C52.0271 22.1893 51.6324 22.36 51.1418 22.552ZM52.0058 19.48C52.3684 19.2667 52.6778 19.0107 52.9338 18.712C53.2111 18.4133 53.4778 18.0827 53.7338 17.72C53.9898 17.336 54.2671 16.9307 54.5658 16.504C54.9284 16.0133 55.1844 15.6187 55.3338 15.32C55.5044 15.0213 55.6324 14.7013 55.7178 14.36C55.6324 14.1253 55.5151 13.88 55.3658 13.624C55.2164 13.3467 55.0671 13.1973 54.9178 13.176C54.6191 13.176 54.2564 13.3573 53.8298 13.72C53.4244 14.0827 52.9764 14.6053 52.4858 15.288C52.4004 15.3947 52.2938 15.5653 52.1658 15.8C52.0378 16.0347 51.9098 16.2587 51.7818 16.472C51.6751 16.664 51.6004 16.792 51.5578 16.856C51.4938 16.9413 51.3978 17.144 51.2698 17.464C51.1631 17.7627 51.0671 18.072 50.9818 18.392C50.8964 18.6907 50.8538 18.904 50.8538 19.032C50.8538 19.16 50.8644 19.2987 50.8858 19.448C50.9284 19.5973 51.0351 19.6933 51.2058 19.736C51.3764 19.7787 51.6431 19.6933 52.0058 19.48ZM64.3948 24.92C63.3494 24.8987 62.6774 24.6 62.3788 24.024C62.1014 23.4693 62.0268 22.7653 62.1548 21.912C62.2828 21.5067 62.3574 21.144 62.3788 20.824C62.4214 20.4827 62.5174 20.2693 62.6668 20.184C62.6668 20.184 62.6774 20.152 62.6988 20.088C62.7414 20.024 62.7308 19.96 62.6668 19.896C62.6668 19.6187 62.7628 19.2347 62.9548 18.744C62.9974 18.616 63.0508 18.4667 63.1148 18.296C63.2001 18.104 63.2428 18.008 63.2428 18.008C63.1361 17.8373 63.1361 17.6987 63.2428 17.592C63.3494 17.4853 63.4561 17.3893 63.5628 17.304C63.6908 17.1973 63.7014 17.08 63.5948 16.952C63.5521 16.8667 63.6054 16.6747 63.7548 16.376C63.9041 16.056 64.0748 15.7253 64.2668 15.384C64.4588 15.0427 64.5868 14.776 64.6508 14.584C64.6508 14.5413 64.7041 14.392 64.8108 14.136C64.9174 13.88 65.0454 13.5813 65.1948 13.24C65.3441 12.8987 65.4828 12.5893 65.6108 12.312C65.7601 12.0347 65.8561 11.8533 65.8988 11.768C66.1121 11.6613 66.0268 11.5867 65.6428 11.544C65.2588 11.5013 64.8534 11.4907 64.4268 11.512C63.7654 11.4907 63.2321 11.4587 62.8268 11.416C62.4428 11.3733 62.1228 11.2773 61.8668 11.128C61.6108 10.8293 61.5788 10.4773 61.7708 10.072C61.9628 9.64533 62.2721 9.42133 62.6988 9.4C62.9761 9.37867 63.1894 9.368 63.3388 9.368C63.5094 9.368 63.7228 9.35733 63.9788 9.336C64.2561 9.29333 64.6828 9.24 65.2588 9.176L66.8908 9.048L66.9868 8.504C67.1574 8.22667 67.2748 8.04533 67.3388 7.96C67.4028 7.87467 67.4454 7.78933 67.4668 7.704C67.4881 7.59733 67.5201 7.416 67.5628 7.16C67.5628 7.16 67.6588 6.98933 67.8508 6.648C68.0428 6.28533 68.1601 5.912 68.2028 5.528C68.4588 5.10133 68.6828 4.71733 68.8748 4.376C69.0668 4.01333 69.1841 3.78933 69.2268 3.704C69.5894 3.17067 69.9414 2.88267 70.2828 2.84C70.6454 2.79733 70.9868 2.88267 71.3068 3.096C71.4988 3.20267 71.6801 3.34133 71.8508 3.512C72.0214 3.66133 72.1281 3.864 72.1708 4.12C72.2134 4.35467 72.1174 4.664 71.8828 5.048C71.8401 5.13333 71.7761 5.29333 71.6908 5.528C71.6054 5.74133 71.5414 5.92267 71.4988 6.072C71.3708 6.22133 71.2108 6.46667 71.0188 6.808C70.8481 7.128 70.7308 7.45867 70.6668 7.8C70.4961 8.16267 70.3894 8.38667 70.3468 8.472C70.3041 8.55733 70.2401 8.6 70.1548 8.6C70.1974 8.81333 70.3254 8.92 70.5388 8.92C70.7521 8.89867 71.1041 8.87733 71.5948 8.856C72.0001 8.81333 72.2774 8.77067 72.4268 8.728C72.5974 8.664 72.7894 8.68533 73.0028 8.792C73.1094 8.94133 73.1628 9.16533 73.1628 9.464C73.1841 9.74133 73.1521 10.0187 73.0668 10.296C72.9814 10.552 72.8641 10.712 72.7148 10.776C72.6081 10.776 72.3841 10.84 72.0428 10.968C71.7228 11.0747 71.3174 11.1387 70.8268 11.16L69.1308 11.32L68.5868 12.408C68.4374 12.6853 68.3094 12.9413 68.2028 13.176C68.0961 13.3893 68.0214 13.5173 67.9788 13.56C67.9788 13.688 67.9041 13.88 67.7548 14.136C67.6268 14.392 67.4881 14.6693 67.3388 14.968C67.2108 15.3307 67.0614 15.6613 66.8908 15.96C66.7414 16.2587 66.6667 16.408 66.6667 16.408C66.5814 16.408 66.5388 16.472 66.5388 16.6C66.6454 16.856 66.6134 17.048 66.4427 17.176C66.3361 17.24 66.2401 17.336 66.1548 17.464C66.0908 17.5707 66.0588 17.624 66.0588 17.624C66.1441 17.7093 66.1548 17.816 66.0908 17.944C66.0481 18.072 65.9841 18.2107 65.8988 18.36C65.8988 18.5307 65.8454 18.776 65.7388 19.096C65.6534 19.416 65.5574 19.7147 65.4508 19.992C65.4721 20.376 65.4934 20.6213 65.5148 20.728C65.5361 20.8347 65.5894 20.8773 65.6748 20.856C65.7814 20.8773 65.9308 20.8773 66.1228 20.856C66.3148 20.8347 66.4534 20.824 66.5388 20.824C66.8588 20.6747 66.7094 21.4213 66.0908 23.064C65.7494 23.5973 65.4081 24.0347 65.0668 24.376C64.7254 24.7387 64.5014 24.92 64.3948 24.92ZM74.2525 21.88C73.8472 21.5173 73.4952 21.144 73.1965 20.76C72.8978 20.3547 72.6952 19.736 72.5885 18.904C72.5458 18.52 72.5885 17.9867 72.7165 17.304C72.8445 16.6213 73.0365 15.9067 73.2925 15.16C73.5485 14.392 73.8258 13.688 74.1245 13.048C74.4232 12.408 74.7218 11.9387 75.0205 11.64C75.2765 11.32 75.5965 11.064 75.9805 10.872C76.3858 10.68 76.8018 10.68 77.2285 10.872C77.4632 11.1493 77.5805 11.5333 77.5805 12.024C77.6018 12.4933 77.4845 12.9307 77.2285 13.336C76.8018 13.912 76.4285 14.6373 76.1085 15.512C75.8098 16.3653 75.6072 17.1333 75.5005 17.816C75.3512 18.3067 75.2872 18.6907 75.3085 18.968C75.3298 19.224 75.4792 19.384 75.7565 19.448C76.1618 19.5547 76.5778 19.4373 77.0045 19.096C77.4525 18.7547 77.8792 18.2533 78.2845 17.592C78.7112 16.9307 79.0845 16.1733 79.4045 15.32C79.5325 15.0213 79.6285 14.6693 79.6925 14.264C79.7778 13.8587 79.8632 13.56 79.9485 13.368C80.0552 12.9413 80.2365 12.6107 80.4925 12.376C80.7698 12.12 81.0578 11.96 81.3565 11.896C81.6552 11.832 81.8792 11.864 82.0285 11.992C82.2205 12.0773 82.4232 12.216 82.6365 12.408C82.8498 12.6 82.9352 12.9413 82.8925 13.432C82.8925 14.2213 82.7218 14.8933 82.3805 15.448C82.0392 16.0027 81.7512 16.5893 81.5165 17.208C81.3245 17.656 81.0152 18.1787 80.5885 18.776C80.1618 19.3733 79.7032 19.9173 79.2125 20.408C78.7432 20.8987 78.3058 21.2293 77.9005 21.4C77.3032 21.784 76.6952 22.0187 76.0765 22.104C75.4578 22.168 74.8498 22.0933 74.2525 21.88ZM84.4643 22.136C84.2723 21.9867 84.0589 21.7947 83.8243 21.56C83.6109 21.3253 83.5363 20.9947 83.6003 20.568C83.6643 19.9707 83.7496 19.448 83.8563 19C83.9629 18.5307 84.0909 17.9973 84.2403 17.4C84.2829 17.144 84.3896 16.7067 84.5603 16.088C84.7523 15.4693 84.9763 14.7973 85.2323 14.072C85.4883 13.3467 85.7549 12.664 86.0323 12.024C86.3096 11.3627 86.5549 10.872 86.7683 10.552C87.0029 10.3387 87.3443 10.232 87.7923 10.232C88.2616 10.232 88.5816 10.3173 88.7523 10.488C88.9869 10.68 89.0616 11.0213 88.9763 11.512C88.8909 11.9813 88.5923 12.7173 88.0803 13.72C87.9736 13.976 87.8349 14.2533 87.6643 14.552C87.5149 14.8293 87.4083 15.064 87.3443 15.256C87.2803 15.4267 87.3016 15.5013 87.4083 15.48C87.5363 15.2453 87.7709 14.9787 88.1123 14.68C88.4536 14.36 88.8163 14.0507 89.2003 13.752C89.5843 13.4533 89.9469 13.1867 90.2883 12.952C90.6296 12.7173 90.8643 12.568 90.9923 12.504C91.1629 12.3973 91.3549 12.312 91.5683 12.248C91.8029 12.1627 91.9629 12.0987 92.0483 12.056C92.5389 11.8213 93.0723 11.736 93.6483 11.8C94.2456 11.8427 94.6083 12.024 94.7363 12.344C94.7576 12.5147 94.8216 12.6427 94.9283 12.728C95.0563 12.8133 95.1203 12.856 95.1203 12.856C95.2056 12.856 95.2483 12.888 95.2483 12.952C95.2696 13.016 95.2803 13.048 95.2803 13.048C95.2803 13.1973 95.1309 13.4107 94.8323 13.688C94.5549 13.9653 94.2456 14.1147 93.9043 14.136C93.6269 14.1573 93.3816 14.2107 93.1683 14.296C92.9549 14.3813 92.6989 14.488 92.4003 14.616C91.5896 15.0853 90.8536 15.5013 90.1923 15.864C89.5523 16.2267 88.8909 16.7813 88.2083 17.528C88.0589 17.6987 87.8989 17.8587 87.7283 18.008C87.5576 18.1573 87.3869 18.3707 87.2163 18.648C87.1096 18.7547 87.0029 18.9893 86.8963 19.352C86.7896 19.7147 86.6936 20.0667 86.6083 20.408C86.5443 20.728 86.5123 20.92 86.5123 20.984C86.5123 20.984 86.4803 21.0907 86.4163 21.304C86.3523 21.496 86.2456 21.688 86.0963 21.88C85.8403 22.2213 85.5843 22.4347 85.3283 22.52C85.0936 22.6053 84.8056 22.4773 84.4643 22.136ZM101.564 22.36C100.924 22.7227 100.241 22.936 99.5155 23C98.8115 23.0427 98.1502 22.9467 97.5315 22.712C96.9128 22.456 96.4115 22.0827 96.0275 21.592C95.8142 21.3147 95.6115 20.8773 95.4195 20.28C95.2275 19.6613 95.1955 18.8293 95.3235 17.784C95.4515 16.8027 95.7502 15.8107 96.2195 14.808C96.7102 13.8053 97.3075 12.92 98.0115 12.152C98.7155 11.384 99.4835 10.8613 100.316 10.584C100.614 10.4773 100.913 10.4027 101.212 10.36C101.532 10.296 101.948 10.2853 102.46 10.328C102.95 10.392 103.388 10.52 103.772 10.712C104.156 10.8827 104.433 11.0747 104.604 11.288C104.945 11.6293 105.169 11.96 105.276 12.28C105.382 12.6 105.425 12.9093 105.404 13.208C105.297 13.8907 104.988 14.6267 104.476 15.416C103.985 16.2053 103.292 16.792 102.396 17.176C102.033 17.3253 101.606 17.4213 101.116 17.464C100.625 17.5067 99.9528 17.4427 99.0995 17.272C98.5875 17.1653 98.2462 17.2187 98.0755 17.432C97.9262 17.6453 97.8622 18.0613 97.8835 18.68C97.9262 19.064 98.0115 19.4053 98.1395 19.704C98.2888 19.9813 98.5555 20.1733 98.9395 20.28C99.4302 20.3653 99.7822 20.376 99.9955 20.312C100.209 20.2267 100.476 20.1093 100.796 19.96C100.966 19.8533 101.126 19.736 101.276 19.608C101.446 19.48 101.606 19.352 101.756 19.224C101.926 19.096 102.065 19 102.172 18.936C102.278 18.8507 102.385 18.7973 102.492 18.776C102.598 18.7547 102.705 18.744 102.812 18.744C103.046 18.7653 103.27 18.8933 103.484 19.128C103.697 19.3627 103.836 19.5867 103.9 19.8C103.9 19.9707 103.793 20.216 103.58 20.536C103.366 20.8347 103.078 21.1547 102.716 21.496C102.374 21.816 101.99 22.104 101.564 22.36ZM101.148 15.224C101.297 15.16 101.51 15.0107 101.788 14.776C102.086 14.5413 102.353 14.296 102.588 14.04C102.822 13.7627 102.94 13.5493 102.94 13.4C102.94 13.1653 102.78 12.9627 102.46 12.792C102.161 12.6213 101.766 12.5893 101.276 12.696C101.105 12.7387 100.902 12.856 100.668 13.048C100.433 13.24 100.198 13.464 99.9635 13.72C99.7288 13.9547 99.5262 14.1893 99.3555 14.424C99.1848 14.6373 99.0675 14.808 99.0035 14.936C99.0888 15.0427 99.2595 15.128 99.5155 15.192C99.7715 15.256 100.049 15.288 100.348 15.288C100.668 15.288 100.934 15.2667 101.148 15.224Z"
        fill="currentColor"
      />
    </svg>
  );
}