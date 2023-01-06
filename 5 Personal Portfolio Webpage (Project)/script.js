function getProjectCards(
  card_title,
  img_path,
  img_avail,
  desc_text,
  lang_frame_text,
  demo_avail,
  github_path,
  demo_path
) {
  // get project card element in case it is needed when constructing new divs
  const project_card = document.getElementsByClassName("project-card")[0];

  // initialise img tab varaible
  let img_tab;

  // check to see if entry has img avil flagged as true or false
  if (img_avail) {
    img_tab = `<img src="${img_path}" alt="project image"/>`;
  } else {
    img_tab = `<div class="no-img"><i class="fa-solid fa-robot"></i></div>`;
  }

  //   get string for container element
  const container_tab = `<div class="container"><p>${card_title}</p></div>`;

  // merge strings for the project-image class element
  const project_image_html = img_tab + container_tab;

  // get existing project-image class
  let project_image = document.getElementsByClassName("project-image")[0];
  if (project_image == undefined) {
    project_image = document.createElement("div");
    project_image.className = "project-image";
    project_card.appendChild(project_image);
  }
  // define html
  project_image.innerHTML = project_image_html;

  // populate description and lang-frame html strings
  const desc = `<p class="desc">${desc_text}</p>`;
  const lang_frame = `<p class="lang-frame">${lang_frame_text}</p>`;

  //   initialise html text for btns
  let card_btns;

  //   prepare buttons
  if (demo_avail) {
    card_btns = `
    <div class="view-proj-btns">
        <div class="view-code" data-location="${github_path}">
            <a href="${github_path}" target="_blank">Code</a>
        </div>
        <div class="view-demo">
            <a href="${demo_path}" target="_blank">Demo</a>
        </div>
    </div>
    `;
  } else {
    card_btns = `
    <div class="view-proj-btns">
        <div class="only-code" data-location="${github_path}">
            <a href="${github_path}" target="_blank">Code</a>
        </div>
    </div>
    `;
  }
  // merge strings for the card-content class element
  const card_content_html = desc + lang_frame + card_btns;

  // get existing card-content class
  let card_content = document.getElementsByClassName("card-content")[0];
  if (card_content == undefined) {
    card_content = document.createElement("div");
    card_content.className = "card-content";
    project_card.appendChild(card_content);
  }
  // define html
  card_content.innerHTML = card_content_html;
}

function deselectTabs() {
  all_tabs = document.getElementsByClassName("tab_select");
  for (let i = 0; i < all_tabs.length; i++) {
    all_tabs[i].className = "tab_select";
  }
}

function getSurveyForm_card(tag_text) {
  getProjectCards(
    (card_title = "Survey Form"),
    (img_path = "./images/feedback_form.png"),
    (img_avail = true),
    (desc_text =
      "This is a webpage built for the Build a Survey Form project in the freeCodeCamp Learn HTML and CSS course."),
    (lang_frame_text = "HTML - CSS"),
    (demo_avail = true),
    (github_path =
      "https://github.com/human-no-id/HTML-CSS-projects/tree/main/1%20Build%20a%20Survey%20Form%20(Project)"),
    (demo_path = "https://idyllic-paletas-47d1f5.netlify.app")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getTributePage_card(tag_text) {
  getProjectCards(
    (card_title = "Tribute Page"),
    (img_path = "./images/tribute_page.png"),
    (img_avail = true),
    (desc_text =
      "This is a webpage built for the Build a Tribute Page project in the freeCodeCamp Learn HTML and CSS course."),
    (lang_frame_text = "HTML - CSS"),
    (demo_avail = true),
    (github_path =
      "https://github.com/human-no-id/HTML-CSS-projects/tree/main/2%20Build%20a%20Tribute%20Page%20(Project)"),
    (demo_path = "https://glowing-mermaid-8ada81.netlify.app")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getTechDoc_card(tag_text) {
  getProjectCards(
    (card_title = "Technical Documentation"),
    (img_path = "./images/tech_doc.png"),
    (img_avail = true),
    (desc_text =
      "This is a webpage built for the Build a Technical Documentation Page project in the freeCodeCamp Learn HTML and CSS course."),
    (lang_frame_text = "HTML - CSS"),
    (demo_avail = true),
    (github_path =
      "https://github.com/human-no-id/HTML-CSS-projects/tree/main/3%20Build%20a%20Technical%20Documentation%20Page%20(Project)"),
    (demo_path = "https://tranquil-praline-ae2875.netlify.app")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getLandingPage_card(tag_text) {
  getProjectCards(
    (card_title = "Landing Page"),
    (img_path = "./images/landing_page.png"),
    (img_avail = true),
    (desc_text =
      "This is a webpage built for the Build a Product Landing Page project in the freeCodeCamp Learn HTML and CSS course."),
    (lang_frame_text = "HTML - CSS"),
    (demo_avail = true),
    (github_path =
      "https://github.com/human-no-id/HTML-CSS-projects/tree/main/4%20Product%20Landing%20Page%20(Project)"),
    (demo_path = "https://spectacular-torte-c9366e.netlify.app")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getFindTrades_card(tag_text) {
  getProjectCards(
    (card_title = "Find Trades"),
    (img_path = ""),
    (img_avail = false),
    (desc_text =
      "A python project designed to interact with an EVM blockchain and search a pair of DEXes an arbitrage trade that might be worth considering."),
    (lang_frame_text = "Python"),
    (demo_avail = false),
    (github_path = "https://github.com/human-no-id/FindTrades"),
    (demo_path = "")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getSimpleTrader_card(tag_text) {
  getProjectCards(
    (card_title = "Simple Trader"),
    (img_path = ""),
    (img_avail = false),
    (desc_text =
      "A project that uses Brownie in Python to deploy a Solidity smart contract that can execute an arbitrage trade in a single transaction on an EVM blockchain."),
    (lang_frame_text = "Solidity - Python - Brownie"),
    (demo_avail = false),
    (github_path = "https://github.com/human-no-id/SimpleTrader"),
    (demo_path = "")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getArbMilkomeda_card(tag_text) {
  getProjectCards(
    (card_title = "EVM Arbitrage"),
    (img_path = ""),
    (img_avail = false),
    (desc_text =
      "A project that builds on 'Simple Trader' and 'Find Trades' and uses a smart contract deployed to the Milkomeda EVM blockchain and accompanying Python functions to search for and make arbitrage trades."),
    (lang_frame_text = "Solidity - Python"),
    (demo_avail = false),
    (github_path = "https://github.com/human-no-id/ArbMilkomeda"),
    (demo_path = "")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getFEROS_card(tag_text) {
  getProjectCards(
    (card_title = "FEROS"),
    (img_path = "./images/FEROS.png"),
    (img_avail = true),
    (desc_text =
      "A standalone windows application that can be used to conduct power system frequency stability studies."),
    (lang_frame_text = "Python Executable - Tkinter"),
    (demo_avail = false),
    (github_path = "https://github.com/human-no-id/FEROS-PC-EXE"),
    (demo_path = "")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}

function getPortfolio_card(tag_text) {
  getProjectCards(
    (card_title = "My Portfolio"),
    (img_path = "./images/portfolio_page.png"),
    (img_avail = true),
    (desc_text =
      "This project is the page that you are currently on, and it has been designed to showcase some of my projects with demos and links to code on GitHub."),
    (lang_frame_text = "HTML - CSS - JavaScript"),
    (demo_avail = false),
    (github_path =
      "https://github.com/human-no-id/HTML-CSS-projects/tree/main/5%20Personal%20Portfolio%20Webpage%20(Project)"),
    (demo_path = "")
  );

  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
}
