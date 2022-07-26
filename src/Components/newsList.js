
import { Navbar, Container, Nav,Form, FormControl, Button,Card,Row,Col } from 'react-bootstrap';
import News from './news';
function NewsList(){
    const NewsData=[
        {image1:'data:image/jpeg;base64,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',
         name:'Rising food prices plunge more South Africans into poverty',
         description:'‘Domestic influences pushing up food prices include food production costs, mainly related to recent electricity tariff increases of more than 15%, and a minimum wage hike of over 16%,’ said Manenzhe.International factors that influence it are crude oil, which ultimately increases food production.'},
         {image1:'data:image/jpeg;base64,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',
         name:'Rising food prices plunge more South Africans into poverty',
         description:'‘Domestic influences pushing up food prices include food production costs, mainly related to recent electricity tariff increases of more than 15%, and a minimum wage hike of over 16%,’ said Manenzhe.International factors that influence it are crude oil, which ultimately increases food production.'},
         {image1:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHAAcAMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcBAAj/xAA3EAACAQMDAgUDAgMIAwEAAAABAgMEBREAEiExQQYTIlFhFHGBMpEVI0IHFlKhsdHh8DOSwWL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQFAQYA/8QAMxEAAgEDAwIEBQMEAgMAAAAAAQIDAAQREiExBUETIlFhMnGRofAU0eGBscHxBiMkUpL/2gAMAwEAAhEDEQA/ANGbaWArbZLSrVM+ZjOjSBePbOsmzgj1alAwK0JGcgDuab2q3tJA1TVJRuScLNG5Af7L20RsbYEsQN6Nry4GE9K8uk8VRMKGSCSEIvmGSGNmXb+2lz2v6kCIDSB3ooLnwPOTkmhI/PgpZfoaqJ6WQAqxOG/bWc3TrmNCqHKn61d+ot5SHcbioC9V9PTK0YdVT0szL1P50oz3cSYXgbZpsdtBOcnv2r2mubVMpnqNjFBkj/FrOkZ5phI4BPp60UtusKaRsP7UfVX99uz6amMTDgbeRq6TqhYaDGun0xU0VgPiDHNfWuk+ufz1VhCvDLuxn7HWp03w5ouMAVLdxLF5M7mmEogopIXMClUOEDnJHzob66/R6Si5UVLDaBuOaGuNzlmkO1zs/pA15y76jNcyE6iF7CtCC1VRuKAjuDW7zp4qN5ZpF9RA4GOmdb3T3ZIckZNR30DqdcfFY67T+Ib/AFEn8Ni9Ma5kBO1R9s99EIVlYs4rHaWUtuKO8GCtS2bauNhL5pyNXwBdGV4q20JCZptd4w1FOW3ZK/pJ11hvWzG+VFWUfgb6aSCqatmgfGKiCE4En5z1+dPQFF01mSSB3ytMGqqOz28QpS1ggpmAXfknJPH30tSpOSp2ogDq3bmk9VP4kkkkmo6CcQyBRtlbuT2B5A6ftowzHJoy0aOorQxiNKdaarjhikdMvIH/AKh30vxT8BxQkb61NCy2ylnr6eRZ56qGMHzYxyjHHHTXC0br4YGRXFeRG8UHBr2tsdM8spoCocqAYVGAfz21BPZBiTAcN+fSrFu2dQs+4rO3RWpJxBt2sqjKbs41jz2kkLZkGM+9bNm8ci+U8UfR101NTRSLzGTtA7btKhEsYMi8D6VJciPxRGeTQ9XdqhmKu5+2hLyyjzNmrIrRAMijaWSeuiQYVM99JitxLOIwcZqaVUhJPNENHMlDJTQ1Bhmk6vjOttZj06Pw271OGR5A5XIFZqW5V1lZo6yQeW4wZEXqNXW8kdwupavkhtZhnTTda9YbZ9RGwK7N2V76q06F0rWLcQxxkhRiltrvcV1o5FlVlkYEAt31wZGzUqJmCiunlo2Pq2nVmVNZQYillRZEdpXo6qWF5B0J3KD7jPT8a+A0nUDTTIWXSaAhgvFHS1AudWrqclZI0J2jPA99AqEk5OKIuMAYrH39Kupir2p6uczQNgYiXY/AOOTnOgFsq+bmmidmAFMPCFNcDahBV1ZggjUSNJD1ZjztyRg40xtMEeGpYJkfIpdcL3Wx+IY7RRtI8ZwxkUDeQf8A7pCOssHkFPYFJPMa1F4aG329ZvoZKmQY3lhlnOgKRsVSRcijSWRVZkODSeipa66GZJaUUJjbKo525HvjWdeWBeTEGAO4q62vVVQ025oyvtdBTgcPM6geYxY9dS3cEcAGjkc1bBdzP7DtS/6hY2UQOUI6LnWbEpL6hsapMZYHUKaz1AlpknHII6/Ot67hW8gBHNZYUwSFTxXPPHt5ZpIKdFwQSW+R7aT0W0ZdTmmyXaQ7UtTxDVQWJaWUCOPpgdWGt3SNVZc0pbLGoWS//TuZTGXU+kIew1yUbUqM96/QbJTVAJXKP7jgjXzRq+9RZFCTQVtOwaBxLH3zwdTlJUOVOa7pqJu4hcRzrtHfOi/U6Thq5nFKZrXZb5USJU06rPHISJUJXdxkZAPPGnF+McGiQg8HeoPZLu1UIZKxGtZADRKAuwD/AA46a5KomGDTYnMR4o7yaanrFNHRRNLDGSZ1UEge27SlbDaIxsKcRqGpzvS43mN8LUCaOfJ5kHpU/BHXQh00eYnVXDqBwRgUFCakVqvUzM27gbuB99SJG0hDU5YfJqzRFyuxpJpKSUKiSR5jcjAz8nVEodyU7Gjj0qA3eufVd1SnhzUECbPJDZAOs1rBlfC7itxL9SnmO9F+APFK1F1qbVUSeYjjfCT0z3GtWKExRjasx5xNKVqjx3bRT1H8RiiyThX7hfY6dGe1SXMeg5G9Z+gs1ZcI97ROUB4B11pFU0pY3cU6tFgp6IG5XyaP6cSeWKVRyP8A9HTkQSKGPFJZ/DbR3ruktOkowGIPv/zoGUGkaaAnlrKIAkebEDywGcff/fX2CRg0BLIaolmpauBWrIRtfjzUOQD9+NSuv/tTAyuN6z3iK31VHQS/w6YswHmwuvVSpBx+edNjH/WVFKaPBzSzw549mqVWnrqdmZeJJYwSE7eodtKYntVEbY2NN43MtWrU9bikIb0RnOXORyc4wNdjvI1UREb0bDMmoGgo5aiklAliOccsYw4PPuMH/LTdIqwyMRg17eJFLUtU2BlTjA6EdML310DHFLpJ4nnmovCsckm+oEzYcy/qBPQ/GhKZYGu6vLiua1cT1CrNVv5cHZehbTVbFKb1NQpFr6CrgrbfRVO0OPLcRMQx9s450RKnZjQLqU6lFdTt/ia232F6Z6YpMBiVH/pOpnGgVb4nineiK2SOyfTV0WZUWZI5IwuQcnp99FbQ621Hil3MwRcA4NIr3WxV9dXxy25Y6ec+h4JPUvA6jWiVZdl4rMW4iI89dkn82I5wHXuw7agYsPei3FU/XFVyzYX540vxKLVioNPTtuCKiu/VT0b7jXHmA2AohGGrLxs8lXX0fMc5jMlMpU7R1U4JyDzj556aVB4hUk8+1dCeYqaz9ZbnhkjS61lRLMPUsMC7Vw2SSTj2BBx0418EfjAHz3q2CzeUauBTS3VEdJNTp5KxUTKQC7klsKD3/AGM+3bghbKWBbenPbxRxnfzfn80Zd6+WkNP6QDK7RhmXOcjI/8AmnE70dtCsisSM4ouTyKmjjnlX/xgnAXaQe/XXQalxlsCld/kp6/w7UB1VyoDeWfcHgaJQWwBQyssROrgUs8NUVukp56i30cTVyLmRpnyI89FGemk3BWEf9rYA3oI5o5TqgXJ99hV9Bc5IITHVF46iI+lVAYL9tPk6cl5Gs8DZ9P81GvX0tJWt71NJHpSBa+1fxozQW+ZqiSQedI3pYj7DtqqC3RIhCwzipbi9MlwJ4Wwp7dqrrrpfbve4rRbaIJAKsSog/SQp5JJ13IiPtT3IuIyAdzThLQaa4U8D24xmObM1QTkuScjAzyO2pJJ9edB29a07OztjCNY84rdXSpuFuSefcZYh6sgZ2gdRtHPz30nxADg1CVb1pHeFF2o46iz1Zp6txnCMfLkPXlecffUvjIz4AxRvbHRqBrJfx6+211iuVJIBz6pYTtAHyP+ntnTzGcUlAM7Ufbv7QKA3d6WrgNOrOqwmQEON2B6vznTETHmWnhm1eanvimGoZIpqV0hdUkXzTtGD6SMk9B6Sfx25OnDBqoSOqlQdqxtDSq7SO8glkKlJpmRmXcBjocc7kYZJA5YYOclhNLp/fqq622utT/VA088LRyhkBAlAyp/bP8A66nl+EkUyMnVik3hXxTfr/WtSVtFin3EJURQsAzA8j26aJjGpxq39KBTJ8WNqeWi2SrPWQXGhM8LvtTPqG34+fnSXZ2YeCw+WcH1NF5G1NcKc9jjIouCO1QCs3R/RScIscbbRwPbudY12s0iM88e449v3rTiCpp8AgjvUrjDQQ2+lmqYhAko5qOr/Gq+nXV1aNGhGEwcis2+6Xb9V1Bvi7H0rNyXG2wSyVUZAO3YHcYbHXt116mCZLn/ALGGCPvXlOpdOn6S36eJtasP/k5pja7uNlDFaaePEk2ZJyM+UD+r5wRrNvOnEuzg5Dfb2rb6FfW8sRinGJF+/vmnkd2t9XPF9PTBpoCW3SnaRjPOfzrDZZ7LCRJ5f7mtoxxlss4P02q2n8SwVMvlVLsgU5JQdcaqfzkBtselZqOVFAVVP5tU1Vb5qenjmdt0Dk7JAe/H6T7++hKB/MdjR7p8HFC/3io6mikCyCoCExtExAdG6cZ+dURl125qcqrjJ2rF3iOz1cxgjUGQPtBjf1g4GCAeGHXgH7aPSRutdDsPjGa3DW6O9W+mrakSShoFEsGcF5BlSOvAz1Hx99UBscVQpDDNUymCwSSvPsqHWJPKpY2OQeeTnqPT15PHOuFqst7UynJOF9T+c07roorpbWJjRnjIcB+QrgA/6HGkzxtJGVU4NJjkSOTU26il9uopKa0FaaWJBT52yLyrZJ6H21gXEU7sTIpBH3z6fxWhDNAyL4R1KaBmv0VtpfKiqYPOYktIpBP2wORpsVlcq2hVwPXv8s80L3VoRqZx8v4pdcPFduMPlwUJnOBveZjgnv8A941v2kckUYjkwVxxyfrWDezo8hkgJVvUbD6Vn7z4vkvk1Pb6CjXLFUVC3G4ew1yCwjWUyck8DsKXNeyaME4Hc9zTi2+DJgj1PiStQSnYUhhO/YD1BzgdPbU911WKLyjnarrXpjudT70zi8M0VLsp7ZNLC8igyStNkEdycdOOw0Fv1yQS6XHlI+lBd/8AHYJo9Y2YH6+1Xf3Qs0O2eb6yZXOVj8wqSPfI559tck6wBHnTueN+3rRR9HHiAa9hz/uoeIaODxBQGeiqVhuKH0yKwxNx+lsd+uD9vjRq2oYbmlAEnisPDcLjBUQLcFQCN8xEdZD7HHb3zj/YxGmnIoi7JQ908T/RXR0FIo8teTnBJxng6ZFAcag1ASCdRFZaStetRRWFkbeWEg/pPUfjVOnT8Ncznc11T+z29y/3eqYlJnmopUkIOc7G4Y9zxyemg8LT/WihcElR2pj4pl83y7tRJ5myZIQzKQsiFc45Gf1HHwfnos5Fei6eI3jMMnBBP3rReHLetDaog0BhmdQZVYgkEDGCR240ROdzWPKiq5VDketDz/S1ENXAgZoIV2pHE4wCRyfnXnryZ/1DSk5I4Odh+YrRt7VYoEiVcA87fauYXWhkgt89yppRJTRMVJYFG64yMjDD7a9QilolfjPavLMwFw0OM47+v7UBTpUTSLOikQopZmPAY+w1NNdRr5c71ZDZSNuRtTM2iS9TxXOMrSRgBVcD1OQRwAOc/ONJjna1Qg7t2FNe2F02OF7mtjb5qyqqKanmjzUK38tJGCNJjpnPb7jVVzb2s6CSTytt8/pUNndX1nK0MXnT3Pb2NM6Vri1ylStlpwkqFdsJZmc54AYgAc/B4OsBmslVtLF2bb0/Mmt9Gu2I1KFUb+v5il/iRLzSIZKOWGURnaVQEyx47jJ5/A1bZQ2bk6QNY2IyTj5ZqO8nu0zvhG7gY+tZ2/SUVntsX0xVM4OBxuJ+PsNNgjZ9zXzHSKzUlXPWweiYLEI2VRGvqHfIHP8AlqkKF2IqViWpeadZmBqCruBhZU5Dfccn86YDjiuDal13grKfEdRTPDHgFfT6SPcN0P76coFcLZp1/Znco6PxLDBU7Wp60GllRv0kP0yO/IA/OvnGV2r6MgP8667W+I7RYxT22pnWWqB2rCmGZeeC3t+efjU+k4LYqrxFVgueaUeK/EtbQVFMsKx+S6blDAlWPsR8caTFGs4y5Ox47fzXLieS3OlAN+53P99qyNT4kq5Sx+pMZP6ljGzj5xp8VrDEMItSSXU83xsalQTrLDJNW0ck6Mu4iUHlB1HPX7aivZSzKEf/AHWl02BFDGRf9Vo/4XbKikNRUzBIHjD+RASuxvcn7e2soXDxEBd2+XvxWm1skuRwvzo6ezYtVPRUVc0bwxFopCSoJYk7Wx1HIweut+xuReRejDn+teavoGs5MndTx67U0hhnipoaWFIaZYIQ7PnOT3OR1YnXnbpZWmKTtjSPr7+/avR2n6fwhJGNWahRzU6/y3eN6t3H8w8+WPgf96ahVsKRp9N6ulV242AHHrVdxRTUj6WonaQPkHIJODnIyNVQXAiuPEjB2Oxzz9qRJCZrcxy4ANcTMFxuMqz1Ec7quAvoOB8a9fp0rhRXlzKmfM1GyWa7UMYmWjmjhB/8jsFCnr3PB+40pJEkYqDvTpopIVDspx+elXN4WvkjrPNTPEZhv37Wxj34GB/lpp0qNzSlSV20iM5PtimbeHrhTwt5F8oKqZFz5IJ6/wCEMw6/Ola4u5xVb9OulxhM59/z87UvivaSqUvdD5zxOBvLlXjYdwQcr++j0t8SmoGwjaeKLgh8O11QsoklpZcggCUHcc9SSOvyT++hWVlG9deGQ9q3Ec1ruFrhqZ44q5KR2VXYcHnGefx21B4v6dmOM1otA1yqg7GkNfX0lTfDBJa6AUyIpRaWlVG6cgt/UeOnzohNJcRjPlznij/SJbNqXfHrxTGnrKKlrZ461IvplANOJBwCRz6OTnHY6lPTrjlDv68Uxuq2pGDn5AV7FV+HausakhSsVCpO9cIhPttJPH41SvS5CNmBOPlv86kbrapuUIGfY7fKm1X9VWQmphfzYY2UF0wApBwR19s8DSrL/wAR3e4Ok7Dfg+mDTb0reRoluuobnIP2I5qEl6jhhknmRZTESwiZiAwBA/bn/TWzc20NyoMgzjj89Kwra4mtJCEOPUfnFJJ/FUjxMtJDTwLK25iBuJOPfj/TWcnS7dRpfLb5/MYrUfqdw5yuBSeS9VMjljO3mKNw2+k9fjVC20CfCg+lIa4uH+JzXlH9A1Yj10sv0pXzIducS8ZUZ7c5B9tMuJGQ6exqzonT4518XPmU7j0P+fUUwulyWpVWghmiqzyI4JWkWRu27dkkjHx01ARrbON69SYliQnVkD1pZTVlThprpTT+TIx9Tl0jmf5YdfsDphQLvikidZdkOKoqqqmprhBLS4aIcfTOfMXnsM8kfBzrqZPalvMFYKe9M66xi61G2qpVoZyp8qRPK2SEDhGCn0txx04HTVsJZl09xxXnOpwxRTCbcI3xHnB9f3+tZ6K31UczDdGDGzAuwHb/AL00LSoVII/pQR2M5l8rY9+2/FbLwvsEFXBN5TRSqRIqnocdce3P7jUtzEjRrJENhzTreSWK4aC4YZ5HvU4K+Cnoy1FZ6cRKpRHlYDcAcM5XcGP+mlJGIXLq2Se/8Vpwwi7hH6hcew+2+MGlM1JS1JadZUpoEwWiiPmP2HpUnofv76pW4wPPzUknR/GkBg2X3quCktsdZI63KeQKNscaRjdk5B3EnHHxo0u9OWxXH/44ZBpaTAotav6Z40pajzVcFCFXBbHbb3/HPzpjGC8GiRePzms6WxvOlHxUbnbb7ZFW3OirbdSpPVRMaUxyBkKjzEJB7Lw3UZ78cjRwKoyI2BUdu4qS6kZiDMhVz37H9vv86QfRJHBRV00xaKWMtHtHHPuffHbRMpA3oVlBJUduaZ0NPZ2oUqEnkM7qXfcRhADwMEc5HfWfNdlGwq5r0dt0cSwiSVyBtx7/AHrP2WqWrs0tvnfCxnzYXAyUJ4PHt7j/AG1qaFlTS3avOi7lsLgSxcNsR6/zRUFCkCFpLpKkjD0mGEng8HOSO3zqX9PvzWw3XAy40mmD3GKWgejqHqJg4A6hAAPYZI/5zof0g1atVLfrspGFjA/rn/ApKYaFKhGip5DID6C0xbn8AapESgYrPbqNyzhyRt7fvTkwXJWCSxwUpHZgoI++ASD99fBEj3UYNLe5muvLM5K/b6bCvcRxqFnpaSZQ+9ypMTk5zy55/wCNRNC2rVmvRw9RtymggjA55/tXk0k0kgqIBFSyxt/LEMhYHJ/OO3GcafbqY2PoazuqTQXKBUySO+P88+9QkSe4Rr5WY5Ok0KYbK9SVxyM+37a5NboRqTn0oun9VkQrBPxxq/f96uuNwpxSSUdMYo4WOIY/LUNGfctjO7OoNyfavTeLHGmo89z+dqjXWGlMJktslV5ioGJcqyE4yeeMfc/tokkMp8i7UjxlhTXJIBQ/0NHRtT1Jq2EiEkrG25j1x8KfyftqpIWIIf8Amsq76qgkVojqx68Z/vV1Tf53MSR5Uhv5ZXLyFiD0Y85OTyMddEsUcGXQeY96g8WbqEgjlbCjf2qVpudPSOtG0ZWEIAYplJHpHs3xn9tVWb+IhSU5rP63aG1mWe0GPvvU7hTNHVSyJQfXpUBVjlEeTG27oVAx0IAOOg1JcWjxZxxW50XrEN0gRzhhyPz0rBW2ZoagYJCt6T+dVKcGsmePUlNXmaKkZl5btn319UwALCp1Mpjpt4IDBc86+zXyjLYry31TpLBOv854mVsA9T7Z1zxFUjJpwtJJgQorY+JYpZKZbpCh8xsLURryd3+IffTZ48eeoLCbxD4XeqbRcJ6Omp6e5U89OmTIxZdrSH2Ofjp+dY07tn+te8tLU+Aoj2ON80VJXWWc+XPHHBHJuw8TNlBj09O/zjQRyS6tztT5Ok2xGy/4r67XOjWlSOlDx0xQAU0qhtp4G7PuT30Qdi2RtTTZwrF4bqCPYfaltdHS3GlNyjpY5mp28upDFw+ezekjd1wc/wC+tbyyp4gHzrwrtNaTm18Qkdvl/ildVcp6gmNpCVU5VAcBe3A7aHtigI31HmgTWAqxbaApwuepx1Ovq7oJIAqVPK8Ns+rhmKTCQdMA4+D1HXtqSSXVIEArdsYPABd+T/agqqulqGBy/wDL5ILFsfPOmQ+SvuoBbgAelaiwXuoVo2im2Ko6g9eO/wDnrUV9YweK8ZLA1tJrTZq//9k=',
         name:'Rising food prices plunge more South Africans into poverty',
         description:'‘Domestic influences pushing up food prices include food production costs, mainly related to recent electricity tariff increases of more than 15%, and a minimum wage hike of over 16%,’ said Manenzhe.International factors that influence it are crude oil, which ultimately increases food production.'},
          {image1:'data:image/jpeg;base64,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',
         name:'Rising food prices plunge more South Africans into poverty',
         description:'‘Domestic influences pushing up food prices include food production costs, mainly related to recent electricity tariff increases of more than 15%, and a minimum wage hike of over 16%,’ said Manenzhe.International factors that influence it are crude oil, which ultimately increases food production.'},
         
    ]
    return(
        <Container>
        <Row>
         
         {NewsData.map(data => <Col><News
           image1={data.image1}
           description={data.description} 
           name={data.name}
          /></Col>)}
         
        </Row>
        
        
         </Container>
    );
}export default NewsList