'use client';

import {
	Avatar,
	Button,
	makeStyles,
	Popover,
	PopoverProps,
	PopoverSurface,
	PopoverTrigger,
	shorthands,
	Text,
	tokens,
} from '@fluentui/react-components';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export const UserAvatar = () => {
	const styles = useStyles();

	const { data: session, status } = useSession();

	const [open, setOpen] = useState(false);

	const handleOpenChange: PopoverProps['onOpenChange'] = (e, data) =>
		setOpen(data.open || false);

	const onAvatarClick = () => {
		setOpen(!open);
	};

	const LoginButton = () => (
		<Button
			className={styles.button}
			onClick={() => signIn()}
		>
			Login
		</Button>
	);

	const LogoutButton = () => (
		<Button
			className={styles.button}
			onClick={() => signOut()}
		>
			Logout
		</Button>
	);
	return (
		<div>
			<div className={styles.avatar}>
				<Popover
					open={open}
					onOpenChange={handleOpenChange}
					positioning="after-top"
				>
					<PopoverTrigger disableButtonEnhancement>
						<Avatar
							size={48}
							color={'gold'}
							onClick={onAvatarClick}
							badge={
								status === 'authenticated'
									? { status: 'available', outOfOffice: false }
									: { status: 'offline', outOfOffice: true }
							}
						/>
					</PopoverTrigger>
					<PopoverSurface>
						<div className={styles.callout}>
							<Text block size={800} className={styles.title}>
								Hello
							</Text>
							<div className={styles.actions}>
								{status === 'authenticated' ? (
									<LogoutButton />
								) : (
									<LoginButton />
								)}
							</div>
						</div>
					</PopoverSurface>
				</Popover>
			</div>
		</div>
	);
};

const useStyles = makeStyles({
	avatar: {
		...shorthands.padding('10px', '10px', '10px'),
	},
	button: {
		display: 'block',
		marginTop: '10px',
	},
	callout: {
		width: '320px',
		...shorthands.padding('20px', '24px'),
	},
	title: {
		marginBottom: '12px',
		fontWeight: tokens.fontWeightRegular,
	},
	actions: {
		marginTop: '20px',
	},
});
