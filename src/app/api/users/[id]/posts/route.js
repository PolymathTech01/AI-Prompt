import { conecctToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request, { params }) => {
  try {
    conecctToDB();
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate('creator'); // the creator is on another collection(a one-to-many-relationship) and we need the data in that collection
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch all prompts', {
      status: 500,
    });
  }
};
