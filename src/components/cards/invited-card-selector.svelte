<script>
    import { onMount } from 'svelte';

    import GrayButton from '../buttons/button-color-gray.svelte';

    let cardStage;
    let cardSelectedList;
    onMount(() => {
        cardStage = document.querySelector('#cardStage');
        cardSelectedList = cardStage.querySelectorAll('.invitedCard');
    });

    import { acceptInvitedCard, denyInvitedCard } from '../../stores/api/card.ajax';

    const applySelectAllInvitedCard = () => {
        for (const cardSelected of cardSelectedList) {
            cardSelected.checked = !cardSelected.checked;
            cardSelected.nextSibling.nextSibling.classList.toggle('bg-gray-600');
            cardSelected.nextSibling.nextSibling.classList.toggle('bg-white');
        }
    }
    const applyAcceptSelectedInvitedCard = () => {
        let targetInvitedCard = new Set();
        for (const cardSelected of cardSelectedList) {
            if (cardSelected.checked === true) {
                targetInvitedCard.add(cardSelected.id);
            }
        }
        const result = acceptInvitedCard([...targetInvitedCard]);
        console.log(result);
    }
    const applyDenySelectedInvitedCard = () => {
        let targetInvitedCard = new Set();
        for (const cardSelected of cardSelectedList) {
            if (cardSelected.checked === true) {
                targetInvitedCard.add(cardSelected.id);
            }
        }
        const result = denyInvitedCard([...targetInvitedCard]);
        console.log(result);
    }
</script>

<div class="gap-4 flex">
    <GrayButton applyFn={applySelectAllInvitedCard} selectList={cardSelectedList} buttonName="모두 선택"/>
    <GrayButton applyFn={applyAcceptSelectedInvitedCard} selectList={cardSelectedList} buttonName="선택 승락"/>
    <GrayButton applyFn={applyDenySelectedInvitedCard} selectList={cardSelectedList} buttonName="선택 거절"/>
  </div>