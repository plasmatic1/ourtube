import * as config from './config';

const DEBUG = true;

async function sendRequestProd(searchQuery) {
    const { apiKey } = config.getConfig();

    let resp = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&key=${apiKey}`);

    return resp.json();
}

function sendRequestDev(_) {
    const dummy = `{
        "kind": "youtube#searchListResponse",
        "etag": "j6xRRd8dTPVVptg711_CSPADRfg/bp1B_dbBnu2vJkKaHbuyuLLDxw0",
        "nextPageToken": "CAUQAA",
        "regionCode": "CA",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 5
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "j6xRRd8dTPVVptg711_CSPADRfg/Udf-CnihhlO4mReOwzE5NKoMMrg",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "Ic7OO3Uw6J0"
                },
                "snippet": {
                    "publishedAt": "2019-03-09T05:28:48.000Z",
                    "channelId": "UC9fDC_eBh9e_bogw87DbGKQ",
                    "title": "Segment Trees - The Best Introduction in 10 mins",
                    "description": "Rachit, an IIT Roorkee Alumnus and ex-Software Engineer at Microsoft talks about Segment Trees. Cracking Coding Interview In 3 months: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ic7OO3Uw6J0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ic7OO3Uw6J0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ic7OO3Uw6J0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Rachit Jain",
                    "liveBroadcastContent": "none"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "j6xRRd8dTPVVptg711_CSPADRfg/728qqzhAkWwUQLZUSfSwBArvatg",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "ZBHKZF5w4YU"
                },
                "snippet": {
                    "publishedAt": "2015-04-23T06:45:41.000Z",
                    "channelId": "UCZLJf_R2sWyUtXSKiKlyvAw",
                    "title": "Segment Tree Range Minimum Query",
                    "description": "Create and query for minimum in segment tree ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZBHKZF5w4YU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZBHKZF5w4YU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZBHKZF5w4YU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Tushar Roy - Coding Made Simple",
                    "liveBroadcastContent": "none"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "j6xRRd8dTPVVptg711_CSPADRfg/92GZp0bGiYH2w6Cw7cffQklnIB4",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "rYBtViWXYeI"
                },
                "snippet": {
                    "publishedAt": "2019-01-30T07:42:12.000Z",
                    "channelId": "UC5xDNEcvb1vgw3lE21Ack2Q",
                    "title": "花花酱 Segment Tree 线段树 - 刷题找工作 SP14",
                    "description": "图书推荐： * 操作系统Operating System Concepts https://amzn.to/2M5PKnD * 算法Introduction to Algorithms https://amzn.to/2T42fmA * 编程珠玑Programming ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/rYBtViWXYeI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/rYBtViWXYeI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/rYBtViWXYeI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Hua Hua",
                    "liveBroadcastContent": "none"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "j6xRRd8dTPVVptg711_CSPADRfg/e0eonKrzjW6Fw28sAfRTMRXLeeo",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "a9WoSN2tN8o"
                },
                "snippet": {
                    "publishedAt": "2017-08-03T18:11:08.000Z",
                    "channelId": "UCx-kFfzekMbhODaBss-ZnsA",
                    "title": "SEGMENT TREE  Implementation / Construction (Sum of range query and update query)",
                    "description": "Why segment tree is needed :- https://youtu.be/udk1jpaN228 Construction of SEGMENT TREE (Sum of range query and update query). The procedure for ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/a9WoSN2tN8o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/a9WoSN2tN8o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/a9WoSN2tN8o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Vivekanand Khyade - Algorithm Every Day",
                    "liveBroadcastContent": "none"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "j6xRRd8dTPVVptg711_CSPADRfg/8Adsf-AHSvyw8CRwgm-Tt6TqOxY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "0l3xN3BpxHg"
                },
                "snippet": {
                    "publishedAt": "2017-06-16T12:38:58.000Z",
                    "channelId": "UC0RhatS1pyxInC00YKjjBqQ",
                    "title": "Sum of given range | Segment Tree | Set 1 | GeeksforGeeks",
                    "description": "Find Complete Code at GeeksforGeeks Article: http://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/ Practice Problem Online Judge: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0l3xN3BpxHg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0l3xN3BpxHg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0l3xN3BpxHg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "GeeksforGeeks",
                    "liveBroadcastContent": "none"
                }
            }
        ]
    }`;
    
    return new Promise(function(res, _) {
        res(JSON.parse(dummy));
    });
}

export let sendRequest = DEBUG ? sendRequestDev : sendRequestProd;
