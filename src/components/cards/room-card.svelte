<script>
import { onMount } from "svelte";


  export let room;

  const dateForm = {
    0: '년',
    1: '월',
    2: '일',
    length: 3
  };
  const changeDateForm = (date) => {
    return date.substring(0,10).split('-')
      .map((val, key) => val.slice(-2, val.length).padStart(2, 0).padEnd(3, dateForm[key])
    ).join(' ');
  }

  
</script>

<div class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg" >
  <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" ></span>

  <div class="justify-between sm:flex">
    <div>
      <h5 class="text-xl font-bold text-gray-900">
        <a href={`/room/${room._id}`}>{room.title}</a>
      </h5>
      <p class="mt-1 text-xs font-medium text-gray-600">
        멘토 | <a href={`/user/${room.ownerId}`}>{room.ownerName}</a>
      </p>
    </div>

    <div class="flex-shrink-0 hidden ml-3 sm:block">
      <img
        class="object-cover w-16 h-16 rounded-lg shadow-sm"
        src="https://www.hyperui.dev/photos/man-5.jpeg"
        alt="sample_image"/>
    </div>
  </div>

  <!-- <div class="mt-4 sm:pr-8">
    <p class="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div> -->

  <div class="flex mt-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">생성일</dt>
      <dd class="text-xs text-gray-500">{changeDateForm(room?.createdAt)}</dd>
    </div>

    <div class="flex flex-col-reverse ml-2 sm:ml-3">
      <dt class="text-sm font-medium text-gray-600">최종 수정일</dt>
      <dd class="text-xs text-gray-500">{changeDateForm(room?.updatedAt)}</dd>
    </div>

    <div class="flex flex-col-reverse ml-2 sm:ml-3">
      <dt class="text-sm font-medium text-gray-600">참여자</dt>
      <dd class="text-xs text-gray-500">{room?.userIdList?.length} 명</dd>
    </div>
  </div>
</div>