const messageTitle = document.getElementById('message-title');
const messageContent = document.getElementById('message-content');
const postButton = document.querySelector('.post-btn');
const addMessageForm = document.getElementById('add-message');
const messagesContainer = document.querySelector('#messages-list');
// Enable the post button when both fields are filled
messageTitle.addEventListener('input', () => {
  postButton.disabled = !messageTitle.value || !messageContent.value;
});

messageContent.addEventListener('input', () => {
  postButton.disabled = !messageTitle.value || !messageContent.value;
});





addMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  localStorage.setItem('title', messageTitle.value);
  localStorage.setItem('content', messageContent.value);

  let newMessageContent = document.createElement('div');

  newMessageContent.innerHTML = `
   <li class="message">
        <div class="message-header">
         <div class="user-img"></div>
          <h3 class="message-title">${messageTitle.value}</h3>
        </div>

        <p class="message-content">${messageContent.value}</p>
      </li>
  `;

  const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", () => {
   const postTitle = newMessageContent.querySelector(".message-title");
   const postContent = newMessageContent.querySelector(".message-content");
   const newTitle = prompt("Enter new title:", postTitle.textContent);
   const newContent = prompt("Enter new content:", postContent.textContent);
    if (newTitle !== null) {
        postTitle.textContent = newTitle;
    }

    if (newContent !== null) {
        postContent.textContent = newContent;
    }

});

  const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () =>  {
    newMessageContent.remove();
});

  const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    buttonContainer.append(editBtn, deleteBtn);

  const post = newMessageContent.querySelector("li");
    post.appendChild(buttonContainer);

  
 
     messagesContainer.appendChild(newMessageContent);
});

