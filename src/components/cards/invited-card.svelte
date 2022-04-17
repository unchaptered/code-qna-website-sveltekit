<script>
  export let invitedCard;

  import { acceptInvitedCard, denyInvitedCard } from '../../stores/api/card.ajax';

  let isChecked = false;
  const applyAcceptInvitedCard = () => {
    acceptInvitedCard([invitedCard._id]);
  }
  const applyDenyInvitedCard = () => {
    denyInvitedCard([invitedCard._id]);
  }
</script>

<div class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg" >
  <!-- <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span> -->

  <div class="justify-between sm:flex">
    <div>
      <div class="gap-2 flex">
        <dt class="flex items-center">
          <input class="hidden invitedCard" bind:checked={isChecked} type="checkbox" id={invitedCard._id} >
          <label class="inline-block p-1 h-4 w-4
            border-gray-600 border rounded transition-all
            {isChecked ? 'bg-gray-600' : 'bg-white'}" for={invitedCard._id}></label>
        </dt>
        <h5 class="text-xl font-bold text-base text-gray-800">
          <a href={`/room/${invitedCard._id}`}>{invitedCard.title}</a>
        </h5>
      </div>
      <p class="pl-6 mt-1 text-xs font-medium text-gray-600">
        멘토 | {invitedCard.ownerName}
      </p>
    </div>

    <div class="flex-shrink-0 hidden ml-3 sm:block">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://www.hyperui.dev/photos/man-5.jpeg"
        alt="test_image"
      />
    </div>
  </div>

  <dl class="flex mt-2">
    <dt class="flex flex-col-reverse">
      <button
        on:click={applyAcceptInvitedCard}
        class="text-sm font-medium text-gray-600 transition-all
        w-fit p-1 border-gray-600 border rounded
        hover:bg-gray-500 hover:text-white
        active:bg-gray-400 focus:outline-none focus:ring">수락하기</button>
      <!-- <dd class="text-xs text-gray-500">31st June, 2021</dd> -->
    </dt>

    <dt class="flex flex-col-reverse ml-3 sm:ml-4">
      <button
        on:click={applyDenyInvitedCard}
        class="text-sm font-medium text-gray-600 transition-all
        w-fit p-1 border-gray-600 border rounded
        hover:bg-gray-500 hover:text-white
        active:bg-gray-400 focus:outline-none focus:ring">거절하기</button>
      <!-- <dd class="text-xs text-gray-500">3 minute</dd> -->
    </dt>
  </dl>
</div>