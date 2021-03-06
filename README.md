# GotoArXivMirrors
Open arXiv sites with arXiv mirrors

## Features
- Available mirrors: Main, China, Germany, India
- Auto complete the pdf href in the abstract html
- Auto modify the pdf url in the pdf page without redirection
  
![usage](./img/usage.png)

NOTE: When using the mirror sites, we sometimes encounter this situation.
That's because the paper was not cached by the mirror currently.
You should return the abstract page and download the pdf for a second time. 
![404](./img/404.png)

## Usage
1. Install [Tampermonkey](https://www.tampermonkey.net/) for you browser
2. **Install From GreasyFork[Recommended]** Install the userscript from GreasyFork (auto update): https://greasyfork.org/en/scripts/388226-gotoarxivmirrors  
Or **install Manually** Add a new userscript using the code in [GotoArXivMirrors.js](./GotoArXivMirrors.js)
3. Click the Tempermonkey button to choose mirrors when visiting arXiv sites

## Others
**GotoArXivCN**: auto redirect to ArXivCN for users in China.  
- **GreasyFork**: https://greasyfork.org/zh-CN/scripts/388330-gotoarxivcn  
- **Source**: [GotoArXivCN.js](./GotoArXivCN.js)