function getProjectCards(
  card_title,
  img_path,
  desc_text,
  lang_frame_text,
  github_path,
  demo_path
) {
  try {
    const place_holder_details = document.getElementById(
      "place_holder_details"
    );
    place_holder_details.remove();
  } catch (err) {}

  // get project card element in case it is needed when constructing new divs
  const project_card = document.getElementsByClassName("project-card")[0];

  // initialise img tab varaible
  let img_tab;

  // check to see if entry has img avil flagged as true or false
  if (img_path) {
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

  //   prepare button class tags
  let github_class_tag;
  let demo_class_tag;
  if (github_path && demo_path) {
    github_class_tag = "view-code";
    demo_class_tag = "view-demo";
  } else {
    github_class_tag = "only-code";
    demo_class_tag = "only-code";
  }

  //   initialise html text for btns
  let card_btns = `<div class="view-proj-btns">`;

  //   prepare buttons
  if (github_path) {
    card_btns =
      card_btns +
      `<div class="${github_class_tag}" data-location="${github_path}">
        <a href="${github_path}" target="_blank">Code</a>
      </div>`;
  }

  if (demo_path) {
    card_btns =
      card_btns +
      `<div class="${demo_class_tag}">
        <a href="${demo_path}" target="_blank">Demo</a>
      </div>`;
  }

  card_btns = card_btns + `</div>`;

  // //   prepare buttons
  // if (demo_avail) {
  //   card_btns = `
  //   <div class="view-proj-btns">
  //       <div class="view-code" data-location="${github_path}">
  //           <a href="${github_path}" target="_blank">Code</a>
  //       </div>
  //       <div class="view-demo">
  //           <a href="${demo_path}" target="_blank">Demo</a>
  //       </div>
  //   </div>
  //   `;
  // } else {
  //   card_btns = `
  //   <div class="view-proj-btns">
  //       <div class="only-code" data-location="${github_path}">
  //           <a href="${github_path}" target="_blank">Code</a>
  //       </div>
  //   </div>
  //   `;
  // }
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

function selectTabs(tag_text) {
  deselectTabs();
  const selection_tag = document.getElementById(tag_text);
  selection_tag.className = "tab_select active_tag";
  selection_tag.scrollIntoView();
}

function getFindTrades_card(tag_text) {
  getProjectCards(
    (card_title = "Find Trades"),
    (img_path = ""),
    (desc_text =
      "A python project designed to interact with an EVM blockchain and search a pair of DEXes for an arbitrage trade that might be worth considering."),
    (lang_frame_text = "Python"),
    (github_path = "https://github.com/human-no-id/FindTrades"),
    (demo_path = "")
  );

  selectTabs(tag_text);
}

function getSimpleTrader_card(tag_text) {
  getProjectCards(
    (card_title = "Simple Trader"),
    (img_path = ""),
    (desc_text =
      "A project that uses Brownie in Python to deploy a Solidity smart contract that can execute an arbitrage trade in a single transaction on an EVM blockchain."),
    (lang_frame_text = "Solidity - Python - Brownie"),
    (github_path = "https://github.com/human-no-id/SimpleTrader"),
    (demo_path = "")
  );

  selectTabs(tag_text);
}

function getArbMilkomeda_card(tag_text) {
  getProjectCards(
    (card_title = "EVM Arbitrage"),
    (img_path = ""),
    (desc_text =
      "A project that builds on 'Simple Trader' and 'Find Trades' and uses a smart contract deployed to the Milkomeda EVM blockchain and accompanying Python functions to search for and make arbitrage trades."),
    (lang_frame_text = "Solidity - Python"),
    (github_path = "https://github.com/human-no-id/ArbMilkomeda"),
    (demo_path = "")
  );

  selectTabs(tag_text);
}

function getFEROS_card(tag_text) {
  getProjectCards(
    (card_title = "FEROS"),
    (img_path = "./images/FEROS.png"),
    (desc_text =
      "A windows application that can be used to conduct power system frequency stability studies."),
    (lang_frame_text = "Python - Tkinter"),
    (github_path = "https://github.com/human-no-id/FEROS-PC-EXE"),
    (demo_path = "")
  );

  selectTabs(tag_text);
}

function getPortfolio_card(tag_text) {
  getProjectCards(
    (card_title = "My Portfolio"),
    (img_path = "./images/portfolio_page.png"),
    (desc_text =
      "This is a project designed to showcase some of my projects with demos and links to code on GitHub."),
    (lang_frame_text = "HTML - CSS - JavaScript"),
    (github_path =
      "https://github.com/human-no-id/HTML-CSS-projects/tree/main/5%20Personal%20Portfolio%20Webpage%20(Project)"),
    (demo_path = "")
  );

  selectTabs(tag_text);
}

function getTHESEUS_card(tag_text) {
  getProjectCards(
    (card_title = "THESEUS"),
    (img_path = ""),
    (desc_text =
      "This web application utilises GPT to provide consolidated summaries of searched news topics (work-in-progress)."),
    (lang_frame_text = "Python - JavaScript - OpenAI - Anvil"),
    (github_path = ""),
    (demo_path = "https://smcybpmh2uvp6emb.anvil.app/XRQGFCW7PVHUDCAT3BAMHZMM")
  );

  selectTabs(tag_text);
}
