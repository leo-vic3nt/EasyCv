import { SideCard } from "../SideCard";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { Fonts } from "./Fonts";

function StyleEditor({ cvFont, setCvFont }) {
	return (
		<SideCard
			title={"Fonts"}
			icon={<ChatBubbleBottomCenterTextIcon className="stroke-1" />}
		>
			<Fonts cvFont={cvFont} setCvFont={setCvFont} />
		</SideCard>
	);
}

export { StyleEditor };
