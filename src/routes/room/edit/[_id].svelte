<script lang='ts'>
    import NavRoom from '../../../components/nav-room.svelte';
    
    import { onMount } from 'svelte';
    import { getRoomData } from '../../../stores/api/room.ajax';
    import { sendInviteCard } from '../../../stores/api/card.ajax';
    import { preventNoOwnerUser } from '../../../stores/secure/middleware';

    let _id = 'loading...';
    let title = 'loading...';
    let isOwner = null;
    let ownerName = 'loading...';
    let createdAt = 'loading...';

    let adminUserList = [];
    let adminInviteList = [];
    let adminPassList = [];
    onMount(async () => {
        const { data } = await getRoomData(location.pathname.substring(11));
        const { _id:localId } = JSON.parse(localStorage.getItem('loggedInUser'));

        _id = data._id;
        isOwner = preventNoOwnerUser(localId, data.ownerId);
        if (!isOwner) {
            alert('수정 권한이 없는 사용자입니다.');
            location.href = '/room/'+location.pathname.substring(11);
        }

        title = data.title;
        ownerName = data.ownerName;
        createdAt = data.createdAt.substring(2,10).split('-').join('.');
        
        adminUserList = data.userIdList;
        adminInviteList = data.inviteCardList;

        console.log(adminInviteList);
        
    });

    import { getAccountByQuery } from '../../../stores/api/auth.ajax';

    /**
     * @true 이메일선택
     * @false 아이디선택
     */
    let isCheckedEmail = true;
    let targetEmail = '';
    let targetUsername = '';
    let targetUserList = [];
    const applySearch = async () => {
        if (isCheckedEmail) {
            if (targetEmail === '') return alert('공백으로 검색할 수는 없습니다.');
            const result= await getAccountByQuery({ email: targetEmail });
            if (result === undefined) targetUserList = [];
            targetUserList = [{...result.data, isChecked:false}];
        } else {
            if (targetUsername === '') return alert('공백으로 검색할 수는 없습니다.');
            const result = await getAccountByQuery({ username: targetUsername });
            if (result === undefined) targetUserList = [];
            targetUserList = result.data.map( val => ({ ...val, isChecked:false }) );
        }
    }

    const applyPostInviteCard = async () =>{
        const inviteUserList = [];
        for (const targetUser of targetUserList) {
            if (targetUser.isChecked) inviteUserList.push(targetUser);
        }
        if (inviteUserList.length > 0) {
            const result = await sendInviteCard(
                // room id 입니다.
                location.pathname.substring(11),
                inviteUserList.map(val => val._id)
            );
        }
        console.log(inviteUserList);
    }

    let adminTarget = 0;
    const switchAdminTagert = (num: number) => {
        adminTarget = num;
    }

</script>

<title>Code Solve - Room</title>

<NavRoom pageName={title} pagePath={'/'+_id} editPage={'관리하기'} editPath={'/edit/'+_id}/>

<section class="w-full min-h-screen max-h-screen ">
    <div class="max-w-screen-xl px-4 mx-auto" >  
        <div class="max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8">
        <!-- room 주인-->
            <div class="max-w-xl">
                <h2 class="text-3xl font-bold sm:text-4xl">[편집] {title}</h2>
                <div class="mt-4 flex gap-4">
                    <p class="text-lg font-bold text-gray-700">{ownerName}</p>
                    <p class="text-lg font-bold text-gray-700">{createdAt} ~ </p>
                </div>
            </div>
        </div>
    </div>

    <section class="max-w-screen-xl mx-auto p-8 ">
          <div class="relative grid grid-cols-1 gap-8 mt-8 lg:gap-4 lg:grid-cols-2">
            <!-- 좌측 시작-->
            <div class="max-h-screen">
                <!-- 고정형 검색창 -->
                <div class="flex flex-col gap-4 pt-4 pb-4">
                    <!-- 검색 옵션 선택 -->
                    <div class=" top-0 flex gap-4">                    <!-- button 1-->
                        <div>
                            <input on:click={()=>{
                                isCheckedEmail = true;
                                targetUserList = [];
                            }} class="hidden peer" type="radio"
                                name="searchTarget" value="email" id="standard" checked/>
                        
                            <label class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-300 peer-checked:ring-1 peer-checked:ring-blue-500"
                                for="standard">
                                <span> <strong>이메일</strong> 로 초대하기 </span>
                                <span> Beta </span>
                            </label>
                        </div>
                        <!-- button 2-->
                        <div>
                            <input on:click={()=>{
                                isCheckedEmail = false;
                                targetUserList = [];
                            }} class="hidden peer" type="radio"
                                name="searchTarget" value="username" id="next_day" />
                            <label class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-300 peer-checked:ring-1 peer-checked:ring-blue-500" for="next_day">
                                <span> <strong>아이디</strong> 로 초대하기 </span>
                                <span> Beta </span>
                            </label>
                        </div>
                    </div>

                    <!-- 검색 타켓 입력 -->
                    <div class="flex gap-4">
                        <div class="relative">
                            {#if isCheckedEmail}
                                <label class="sr-only" for="email"> Email </label>
                                <input class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                                    id="email" type="email" bind:value={targetEmail} placeholder="Type Email"/>
                            {:else}
                                <label class="sr-only" for="username"> Username </label>
                                <input class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                                    id="username" type="text" bind:value={targetUsername} placeholder="Type Username" />
                            {/if}
                        </div>
                        <button on:click={applySearch}  type="button"
                            class="px-3 py-3 text-xs font-medium text-white bg-blue-600 rounded">검색하기</button>
                        
                        {#if targetUserList.length !== 0}
                        <button type="button" on:click={applyPostInviteCard}
                            class="px-3 py-3 text-xs font-medium bg-gray-300 rounded">초대하기</button>
                        <!-- <button type="button" on:click={selectAllUser}
                            class="px-3 py-3 text-xs font-medium bg-gray-300 rounded">모두선택</button> -->
                        {/if}
                    </div>
                </div>

                <!-- 검색 결과 -->
                <div id="search_container" class="flex flex-col gap-4 pb-8">
                    {#if targetUserList.length !== 0}
                        {#each targetUserList as targetUser}
                            <div on:click={() => targetUser.isChecked = !targetUser.isChecked} class="grid grid-cols-4 relative transition-colors hover:bg-gray-300 border-2 rounded text-sm
                                {targetUser.isChecked ? 'border-gray-500' : 'border-gray-200'}">
                                <p class="col-span-1 w-full py-3 pl-3 pr-12">
                                    {targetUser.sort}
                                </p>
                                <p class="col-span-3 w-full py-3 pl-3 pr-12 ">
                                    {targetUser.username}
                                </p>

                                <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        {/each}
                    {:else}
                        <p> 검색 결과가 없습니다. </p>
                    {/if}
                </div>

            </div>
            <!-- 좌측 끝 -->

            <!-- 우측 시작 -->
            <div class="max-h-screen">
                <!-- 고정형 검색창 -->
                <div class="flex flex-col gap-4 pt-4 pb-4">
                    <!-- 검색 옵션 선택 -->
                    <div class=" top-0 flex gap-4">                   
                        <!-- button 1-->
                        <div>
                            <input on:click={()=>switchAdminTagert(0)} checked={adminTarget===0} class="hidden peer" type="radio"
                                name="administration" value="email" id="administartion_users"/>
                        
                            <label class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-300 peer-checked:ring-1 peer-checked:ring-blue-500"
                                for="administartion_users">
                                <span> <strong>참여자</strong> 리스트 </span>
                                <!-- <span> Beta </span> -->
                            </label>
                        </div>
                        <!-- button 2-->
                        <div>
                            <input on:click={()=>switchAdminTagert(1)} checked={adminTarget===1} class="hidden peer" type="radio"
                                name="administration" value="username" id="administartion_invite" />
                            <label class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-300 peer-checked:ring-1 peer-checked:ring-blue-500"
                                for="administartion_invite">
                                <span> 보낸 <strong>초대장</strong> </span>
                                <!-- <span> Beta </span> -->
                            </label>
                        </div>
                        <!-- button 3-->
                        <div>
                            <input on:click={()=>switchAdminTagert(2)} checked={adminTarget===2} class="hidden peer" type="radio"
                                name="administration" value="username" id="administartion_pass" />
                            <label class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-300 peer-checked:ring-1 peer-checked:ring-blue-500"
                                for="administartion_pass">
                                <span> 받은 <strong>신청</strong> </span>
                                <!-- <span> Beta </span> -->
                            </label>
                        </div>

                        <!-- button 4-->
                        <button on:click={()=>alert('미구현')} class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2
                            transition-colors border shadow-sm cursor-pointer
                            text-xs font-medium text-white bg-blue-600 rounded">
                            <span> 적용 </span>
                        </button>
                    </div>

                </div>
                
                <div id="search_container" class="flex flex-col gap-4 pb-8">
                    {#if adminTarget === 0}
                        <!-- adminUserList -->
                        {#if adminUserList.length !== 0}
                            {#each adminUserList as adminUser}
                                <div  class="grid grid-cols-4 relative transition-colors hover:bg-gray-300 border-2 rounded text-sm
                                    border-gray-200">
                                    <p class="col-span-1 w-full py-3 pl-3 pr-12">
                                        {adminUser.sort}
                                    </p>
                                    <p class="col-span-3 w-full py-3 pl-3 pr-12 ">
                                        {adminUser.username}
                                    </p>
                                </div>
                            {/each}
                        {:else}
                            <p> 참여 중인 유저가 없습니다. </p>
                        {/if}

                    {:else if adminTarget === 1}
                        <!-- adminInviteList -->
                        {#if adminInviteList.length !== 0}
                            {#each adminInviteList as adminUser}
                                <div  class="grid grid-cols-4 relative transition-colors hover:bg-gray-300 border-2 rounded text-sm
                                    border-gray-200">
                                    <p class="col-span-1 w-full py-3 pl-3 pr-12">
                                        {adminUser.sort}
                                    </p>
                                    <p class="col-span-3 w-full py-3 pl-3 pr-12 ">
                                        {adminUser.username}
                                    </p>

                                    <span meta-id={adminUser._id} class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            {/each}
                        {:else}
                            <p> 진행 중인 신청이 없습니다. </p>
                        {/if}
                    {:else}
                        <!-- adminPassList -->
                        {#if adminPassList.length !== 0}
                            {#each adminPassList as adminUser}
                                <div  class="grid grid-cols-4 relative transition-colors hover:bg-gray-300 border-2 rounded text-sm
                                    border-gray-200">
                                    <p class="col-span-1 w-full py-3 pl-3 pr-12">
                                        {adminUser.sort}
                                    </p>
                                    <p class="col-span-3 w-full py-3 pl-3 pr-12 ">
                                        {adminUser.username}
                                    </p>

                                    <span meta-id={adminUser._id} class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            {/each}
                        {:else}
                            <p> 들어온 신청이 없습니다. </p>
                        {/if}
                    {/if}
                </div>
            </div>
            <!-- 우측 끝-->
        </div>
    </section>

</section>